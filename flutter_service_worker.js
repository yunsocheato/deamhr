'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b2e4ddfb5a1afded4278f963840b2b7d",
"assets/AssetManifest.bin.json": "114d1cd280e09a18552907e7148953fe",
"assets/assets/Fonts/7TH.ttf": "975342bc50290aace5db9f892db1694b",
"assets/assets/Fonts/DODG5.ttf": "bee3934cd23e69da9f48c2634400d7ef",
"assets/assets/icon/calendar.png": "69603b0ed36fad712ad5db5f0b816f2d",
"assets/assets/icon/calendars.png": "87949d0fc939df3a6ac125576e8ef728",
"assets/assets/icon/equilibrium.png": "c5278f8d8afc50a4bb487a5a1c60bb41",
"assets/assets/icon/folder.png": "34f02c7b672b23b53dab942bb1b305c9",
"assets/assets/icon/happy.png": "747b217c7dfcde72b4f966fb597b87c5",
"assets/assets/icon/home.png": "99f6741040e7cb8db626b5008c2b6bf2",
"assets/assets/icon/hospital.png": "8486d7bfac8a9cc21205198d91dc9b31",
"assets/assets/icon/key.png": "3ecfb96fb7655f334731dbd0020e5c1c",
"assets/assets/icon/log-out.png": "1e342178da5277682a6bf18355bcecdb",
"assets/assets/icon/logout.png": "fc4927b226d4f16ea83ae0b758c86cd7",
"assets/assets/icon/logouts.png": "93afbde7fb93a34d3bf8bf03f285b6dd",
"assets/assets/icon/manageteam.png": "e4d690ef21ab4ae789face3b85dce7c7",
"assets/assets/icon/manageuser.png": "0d95a309b0bb73d181ac957b5307aab9",
"assets/assets/icon/notification.png": "9988fea7cc6f18c9c94711c1bb923b84",
"assets/assets/icon/overview.png": "357672d3617aaa7ff1c9d3afe65d1f51",
"assets/assets/icon/policy.png": "00ff67e2b5afdda8576ae81f4dc2b37c",
"assets/assets/icon/school.png": "d4884bad02965de95b262e7c2809ecd3",
"assets/assets/icon/setting.png": "7bc7705ac7aa5313a92ab99779f7c3e8",
"assets/assets/icon/user.png": "61ca05c1e9dfc46e3e3ef8ad0e3fe1d5",
"assets/assets/icon/userabsent.png": "5850c444bf29f4154b5ae5f007635f75",
"assets/assets/icon/usercheckin.png": "cbf5da29d86897cb91c96268a73c3014",
"assets/assets/icon/usergroup.png": "6b2338a080ada392810b6ec3a35bc17c",
"assets/assets/icon/userlate.png": "13917a6a8f0999c8b30c5dd95066dfa0",
"assets/assets/icon/userleave.png": "374d58678e7d4c0ab0b0e32c31ea22bc",
"assets/assets/icon/usersetup.png": "56954d11e097a435a450e9b0d222ca40",
"assets/assets/icon/userupdate.png": "d34ec58c16d1e711e7d84b5d025de01f",
"assets/assets/icon/wallet.png": "6e6949f05e2eb6c92f77c91ef7309f84",
"assets/assets/images/available.png": "d47644a51cfc1c59743bfb375c6a5dbd",
"assets/assets/images/changepass.png": "39b52a767a4d7d76efccfad7ccc9877f",
"assets/assets/images/deamlogo.png": "2efb588d7f4933b075cfab87e84f93c0",
"assets/assets/images/department.png": "998b3e35986deeac5a1435df76117ef6",
"assets/assets/images/email_verify.png": "5e5111f3df7faed2611d4f1f80cfa3a8",
"assets/assets/images/forgotscreen.png": "6196ab0bb9e57accc6e43ed11a371aa6",
"assets/assets/images/leaverequest.png": "7baa78d88c33e11f972fae3132bae822",
"assets/assets/images/nodata.png": "22acad5c157d23450ac2571c0b1ebaa3",
"assets/assets/images/otp.png": "7c95575096ad4e543021068a625178ed",
"assets/assets/images/otpforgot.png": "ee23555a40cbaa31dbe204e56a80af16",
"assets/assets/images/profileuser.png": "691320f505aeeae77fa1b3e6580ef069",
"assets/assets/images/setting_icons.png": "dca8764dd064d2671fb18e667feec3e0",
"assets/assets/images/supabase.png": "26ae1ca929fde7768412ec1995401c7f",
"assets/assets/images/team_banner.jpg": "dba9307c28ea3cba5f7dc985bd45eec0",
"assets/assets/images/total-employee.png": "4efe5fa24624d9911d0b8481753d42ca",
"assets/assets/images/unavailabledata.png": "f1a384f378b6f72214290140c752f659",
"assets/FontManifest.json": "69620e444922f2dcc8f7c26153702b78",
"assets/fonts/MaterialIcons-Regular.otf": "4b26286934d12a3c5a7ff5f380dea697",
"assets/NOTICES": "8890503d8b81701b015ed5d861324527",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/enefty_icons/lib/assets/fonts/icons/EneftyIcons.ttf": "6e7db39d5919b03356be236986ccfd19",
"assets/packages/flutter_boxicons/fonts/Boxicons.ttf": "20b1c3156a97064740efd925bba76770",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "2f702e18e2b9c960888c779434b773d4",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "25a47e6135dec62a6d49b84894e6b9f4",
"icons/favicon.png": "2efb588d7f4933b075cfab87e84f93c0",
"icons/favicon1.png": "2efb588d7f4933b075cfab87e84f93c0",
"icons/Icon-192.png": "2f702e18e2b9c960888c779434b773d4",
"icons/Icon-512.png": "2f702e18e2b9c960888c779434b773d4",
"icons/Icon-maskable-192.png": "2f702e18e2b9c960888c779434b773d4",
"icons/Icon-maskable-512.png": "2f702e18e2b9c960888c779434b773d4",
"index.html": "054109b8e2970e8ef7c0dad1d765fecd",
"/": "054109b8e2970e8ef7c0dad1d765fecd",
"main.dart.js": "056a3131a35f3ca36ea9c117ea2fc057",
"manifest.json": "8cfc31cf623dda16fecb47624abb4294",
"unknowicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "aacec0ae8839f6c6be50ff7395ecb874"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
