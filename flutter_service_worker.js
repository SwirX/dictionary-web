'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "706c15be9f8d9d1eba6146dcb8275c75",
".git/config": "d7ac3641f1d3819aeb6439ec8460a26c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6a6c1c20d08c300f1a2694237dc64974",
".git/HEAD": "d6628019dca291cf79c10adb10b6a597",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "60cffd671ab1510007cebbf00d36ec1f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ba986687e1245f49be7e7d5d7c437a97",
".git/logs/refs/heads/main": "ffbc7c3b5c4d5e3ee7033868abab1a1e",
".git/logs/refs/heads/web": "629e74f479643e69466191bee71fb77b",
".git/logs/refs/remotes/origin/web": "3c06361ec6e9c7e535bc6183a610d231",
".git/objects/00/b933e2d80db51774cfc1679f14a4940aba01df": "e5f870082937796a60286d1794d4b735",
".git/objects/01/9373eeaca48c442615e48059f11a7a5b3b56a1": "163805f8d578b50c43b9f9659cbee249",
".git/objects/01/e5e1f7157fecbd36a1c91eb8ce2523e5b91254": "1b8b5c423af54593817f7f1971d90327",
".git/objects/03/cc78823925060b27990abc111206db6fbec96a": "21b0a98bf10593b147ff30e93e0bafcb",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/3d075dd2f710178a181ff3aab0530a3f70dcf4": "2865a6abcb0af3776539bebde6e4539e",
".git/objects/0a/18125d07db1151c007e3408d1f754ec14fbfba": "93e91bd971bccaaab2b671745033afe0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/973f9e7dc9773fd3cf2102ef35f8d9b007e517": "9deb441f9fc4c3be80d90c81d46acc67",
".git/objects/21/2c95f9a9bc881c362757b31d8032bf71a82d22": "579c76a3b6eef700677b36d3ae51b9b9",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/82dc976ce38c2fd9b4fc42b15d1f79577fd2cf": "ee58d3aa923d4c7bef0eef79220e5e8d",
".git/objects/29/a4a693fef03f818d3f4d3f27211ee1f0d14dac": "0f9f678139ecdcec5bdcdb7e730980c7",
".git/objects/29/e95877832d5722f5f0673e52b5566844a224eb": "566b6edbc3f1e80f1977572bc87d7fed",
".git/objects/2b/d89fd5c0533adb2adb082273f4ccaeb891c807": "232eaefc46fe8cdef98d1959372f0e14",
".git/objects/36/21d35ffd28841c46e468eaeb21207d8aa5cda8": "369a9017ed612c3bcf6fddca6b1e89b6",
".git/objects/37/1f49accd7e0ce982f71c28bc23da5caab0aaec": "36649fe572ca64519d75a7ffa0840bb3",
".git/objects/41/de173d9014b38f8290acf270c490b37fc79a60": "d2a9d01215e9d65fd0456ded49e98878",
".git/objects/49/fbaa0baf5bd0ef7a5f4879ee670e692fc4db94": "32eaf086935669f6ee391bf70dc1d82e",
".git/objects/4a/4589e7abc2e02407c4c402f007ae7e959157ec": "3b5ad9d69a7e0a9e0a61133d23aba399",
".git/objects/4a/a560119dcc221120b0a8ecddeb35475875e650": "7033470ef3d6b785347d3cb00895aec3",
".git/objects/4b/b9a2463a937decf4b760e34ed58750dc6c5b0c": "33caec5bad5a755e015fb384854bdb80",
".git/objects/58/92b1f1c6c0ab2aa1f6448add8ada9a8796b010": "9a201b7d0eeb0967f4f569c06c390b6f",
".git/objects/5b/ccc34f177650f1d0419057cffb816b038ec31c": "445f6ae6061a4fa3ad5a010fc3ee8c61",
".git/objects/5c/6e9c0992fb59c2b3bd8de045189ea491ee823f": "5f5f1d1589cfb6d4ebddfb1df5246edc",
".git/objects/5c/cacdb0902726076c3369ee8693895cd4701900": "46f123980faabb50d5250131e8744cfd",
".git/objects/61/dfa89e72002c4b415c635494778d7f2a732786": "2484ed742cac401852a310289394b66a",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6b/da21c2311b7690e724e43c193ba7bf487836cb": "c9f7acabf62449095415e2a70e9f1605",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/02b4399f62c20be9094dc12189da9e6ab74415": "dd689cda367da9215a02adbf24b89fe8",
".git/objects/79/73be5c0e7909791d02a6751d383f3b035b85b3": "94793637e21ab85f060e42b3791a921b",
".git/objects/7b/f04afaeab6e2c27ff376b38e5511b5fe7aee8e": "83ea58f94ae0fb8847933f89b6de91df",
".git/objects/7e/43d2e8f663997a7d6f174b1653f46c2fd65433": "00006010d1693efe0eb71d962ba311a9",
".git/objects/7f/cb146f7a4d3eb613e23345353701d7f010b132": "1791f1835b43b32100c49d09db6dbb03",
".git/objects/84/5765d16564e512b64e00412e8fd5c0ed44d257": "a91c8d39c34d5ebd99b1b8b618cc55f5",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/bb11b316335b7fa54a1febd128a5048fff77a7": "a2885baa0929287674492923266f98e1",
".git/objects/92/65271423f84461d77884d2951fb8bc3d1fd82a": "b19ea62170f08eea8d0867d33c16947d",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9c/20e254560c56248205691fb64cb1a416c78525": "6601241727daf6824c1bad9a650610a7",
".git/objects/9d/247a4456925a23369d792e76f41481493082fb": "0e0e7583bc9e40c40470ee18e9a58a8a",
".git/objects/9d/c9fc3bc9fa3f3264013f8af2d6ef02e97813d5": "c234dddf848d2715f4c56e5427dabee7",
".git/objects/a0/fec5f433e450010d813aba0a5ab35ee019e9ad": "cfbca2e4286aa05679576d014e70769d",
".git/objects/a1/7e4821e2ba9c567648a43b5c6ffacf7697fbf7": "014199121648c8e8e3bf9bf90c425a74",
".git/objects/a8/1ab146c4fcc356d9c51e9319b1da29e8c9ab71": "c2679eaa2be331782287338fbb5f5aa2",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/363ee5c18bfce6ddef0eb2dd5acb65796b8dcb": "5dd15a12f70dd72cc0d3927d8a57f36f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b4/f0cde151773f928e2b3072e05cb5b252e711d9": "878c6ea03ee4f9ff0b25c58a628eec90",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/f925a5e8cd70d2f98da7278696871b10663d62": "6ad7cf1540f5e1a06c72e7944e763208",
".git/objects/c0/331f62c65cb6c043c79ed14945772e7d5f6b7f": "5a885a74daa6dc70e126d67152b9c116",
".git/objects/c3/a92b50264b3b87d2a9ba4e98db18aefaee3537": "27ddf6c7c14b512db6f168c9423ae87d",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/f44c0b213bf451156c4c9c3b5cd29fadbbb63d": "7f8f7626b845192ae4181e219ad9139d",
".git/objects/c8/50d2b8adb57143a29f0e8bedcc9c9b425f65da": "79396e798f28e86dca1eb7dc545866c1",
".git/objects/ca/515219f397fdee639a2fe4ed2a21794d35cb74": "4684d256a862c2160b6444c97d36c903",
".git/objects/ce/8d876e4d3592184b18084f26385bc92baa10f2": "b574a836ca08696458633d4dcb4beb3a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d8/1fd59104f93f48e3760bf68571da788c2db5d7": "76017e12c2d3a41c1d8c4f29fe7b56c3",
".git/objects/db/c3a400ba48bbe4f30d0041ee174d54d0aef10d": "7878063ca8a07713cab102f8c2036e0b",
".git/objects/dc/ddbb897e3338f4f529f8c9dfb9479ca3270153": "163dd905579619e52d5400f692aae9d3",
".git/objects/e5/76c5a261354d3eabd86cf9a770deb2a114d149": "5dfc2161ebb04a3a8977668f5bb2931b",
".git/objects/e6/e4698ae9f03afe92616a966240d36b0a945e9e": "197ab14348b3a831dc68dcdb16638c41",
".git/objects/e9/5112948ba7a31da84b4bda834f5795770b7308": "844a7e129cd05248a1c273f436f49a58",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/868a0c934c3dc7fdc9be6c0acfaf04de1668f4": "8b0b744d6aadb85e5a6eb75fe7c9a8d5",
".git/objects/ee/40709ec9314f513eb88c393a735c674da8b1e3": "a86b18a5b1e68b8b27f23c58675d6efb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/1315c696396303bee01ea226c6e589a895e1ed": "6949b8ffb22116d3bf56019a30edb6af",
".git/objects/fd/635e45be6b69465a31b69ef59c9466c3256076": "8c1861abe8e1713ee699b4bd1a627f89",
".git/objects/ff/b10b000fa33b37def4def42f1e0219b5ba2b93": "b9b3285633f8de005172d60262eedee8",
".git/ORIG_HEAD": "d64d0e1ea74d4ffef9794defd5d07e0c",
".git/refs/heads/main": "625ad2de3eb7fdfb30940f78adda2bee",
".git/refs/heads/web": "d64d0e1ea74d4ffef9794defd5d07e0c",
".git/refs/remotes/origin/web": "d64d0e1ea74d4ffef9794defd5d07e0c",
"assets/AssetManifest.bin": "f984915c2daafcd04f96aa2828aedc79",
"assets/AssetManifest.bin.json": "ae05149b0a9e9751837eb17397837afa",
"assets/AssetManifest.json": "f74a9254f76e9f1f81d0943c8efdec74",
"assets/assets/icon/icon.png": "46eae67567a5069352d7be47205546cb",
"assets/FontManifest.json": "b417c8197e08be3f18101f9b01bf0e45",
"assets/fonts/MaterialIcons-Regular.otf": "2ca71ff20cdff25d9fde693c531ac8f5",
"assets/NOTICES": "6fcd194a3028d5a7b8970bdcd376aab4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "b6530f23d5df9d8b334e31a4dc62e0d0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "d16f954bf452c4ea0523afdf82ddac68",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "02eb0d9c0655a2512536c1f7140df45d",
"icons/Icon-192.png": "8f332a482d9b93cb73e6d302a8b1a0e6",
"icons/Icon-512.png": "c7af82f5ffb4615e42bfdaca017ba2bb",
"icons/Icon-maskable-192.png": "8f332a482d9b93cb73e6d302a8b1a0e6",
"icons/Icon-maskable-512.png": "c7af82f5ffb4615e42bfdaca017ba2bb",
"index.html": "680cebf2526172cf4ddeceb3017f65bd",
"/": "680cebf2526172cf4ddeceb3017f65bd",
"main.dart.js": "1b3d4053b6f24d091dd5fe84d5ab1476",
"manifest.json": "9786f3084a32b41e3b6bd9aeca3f6196",
"version.json": "f198bf56fb1b7b58f4206f1bca3acac6"};
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
