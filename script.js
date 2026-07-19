/* ── script.js ── DeamHR Loader Controller ── */

(function () {
  'use strict';

  var percentEl = document.getElementById('loader-percent');
  var loaderEl  = document.getElementById('loader');

  /* ══════════════════════════════════════════
     Smooth 0 → 100 % progress counter
     · Eases quickly to ~85%, then crawls to
       leave room for the real Flutter frame.
  ══════════════════════════════════════════ */
  var current  = 0;
  var targetPct = 92;           // auto-stop here; 100 set on first-frame
  var interval  = null;

  function tick() {
    if (current >= targetPct) {
      clearInterval(interval);
      return;
    }
    /* Ease: faster at start, slows near the cap */
    var remaining = targetPct - current;
    var step = Math.max(0.4, remaining * 0.045);
    current = Math.min(current + step, targetPct);

    if (percentEl) {
      percentEl.textContent = Math.floor(current) + '%';
    }
  }

  interval = setInterval(tick, 28);

  /* ══════════════════════════════════════════
     Hide loader when Flutter paints first frame
  ══════════════════════════════════════════ */
  window.addEventListener('flutter-first-frame', function () {
    clearInterval(interval);
    current = 100;
    if (percentEl) percentEl.textContent = '100%';

    /* Short pause so "100%" is readable, then fade out */
    setTimeout(function () {
      if (loaderEl) loaderEl.classList.add('hidden');
    }, 300);
  });

})();
