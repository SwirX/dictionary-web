'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"dictionary-web/assets/AssetManifest.bin": "f984915c2daafcd04f96aa2828aedc79",
"dictionary-web/assets/AssetManifest.bin.json": "ae05149b0a9e9751837eb17397837afa",
"dictionary-web/assets/AssetManifest.json": "f74a9254f76e9f1f81d0943c8efdec74",
"dictionary-web/assets/assets/icon/icon.png": "46eae67567a5069352d7be47205546cb",
"dictionary-web/assets/FontManifest.json": "b417c8197e08be3f18101f9b01bf0e45",
"dictionary-web/assets/fonts/MaterialIcons-Regular.otf": "2ca71ff20cdff25d9fde693c531ac8f5",
"dictionary-web/assets/NOTICES": "676a79d7156cb83868f9f48dd080d8d6",
"dictionary-web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"dictionary-web/assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"dictionary-web/assets/packages/fluent_ui/fonts/FluentIcons.ttf": "b6530f23d5df9d8b334e31a4dc62e0d0",
"dictionary-web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"dictionary-web/canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"dictionary-web/canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"dictionary-web/canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"dictionary-web/canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"dictionary-web/canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"dictionary-web/canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"dictionary-web/canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"dictionary-web/canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"dictionary-web/canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"dictionary-web/canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"dictionary-web/favicon.png": "d16f954bf452c4ea0523afdf82ddac68",
"dictionary-web/flutter.js": "4b2350e14c6650ba82871f60906437ea",
"dictionary-web/flutter_bootstrap.js": "7f058e209882ab403e7fb786d8605d05",
"dictionary-web/icons/Icon-192.png": "8f332a482d9b93cb73e6d302a8b1a0e6",
"dictionary-web/icons/Icon-512.png": "c7af82f5ffb4615e42bfdaca017ba2bb",
"dictionary-web/icons/Icon-maskable-192.png": "8f332a482d9b93cb73e6d302a8b1a0e6",
"dictionary-web/icons/Icon-maskable-512.png": "c7af82f5ffb4615e42bfdaca017ba2bb",
"dictionary-web/index.html": "39a4d9413b38d46b17673d7f2eafe91c",
"dictionary-web//": "39a4d9413b38d46b17673d7f2eafe91c",
"dictionary-web/main.dart.js": "add843df1194784ed196bd460aa5cbd2",
"dictionary-web/manifest.json": "9786f3084a32b41e3b6bd9aeca3f6196",
"dictionary-web/version.json": "f198bf56fb1b7b58f4206f1bca3acac6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["dictionary-app/main.dart.js",
"index.html",
"dictionary-app/flutter_bootstrap.js",
"dictionary-app/assets/AssetManifest.bin.json",
"dictionary-app/assets/FontManifest.json"];

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
