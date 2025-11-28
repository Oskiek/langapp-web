'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2c7b1c99ae95217ec884d61560d65b97",
"assets/AssetManifest.bin.json": "8274f50e80c448a3908579fae09b8926",
"assets/AssetManifest.json": "d28558ddef62390bbb8910f38c282736",
"assets/assets/entry_img/apple.png": "0cce77e971ac78deb11f7514e6ea8327",
"assets/assets/entry_img/banana.png": "8982e500d299cadd2769f8144a480c4f",
"assets/assets/entry_img/beer.png": "5c9ecb8a93b7e65aa63033928656025d",
"assets/assets/entry_img/boy.png": "556f74834debadce5e768d5a927a6577",
"assets/assets/entry_img/bread.png": "e2915b75f9ab8672137fde0837710744",
"assets/assets/entry_img/brother.png": "71831e57563b3386f9dca573e96551aa",
"assets/assets/entry_img/butter.png": "49afeda3ae8aecf278c2e7a235d5ace7",
"assets/assets/entry_img/cheese.png": "3f371cee8ec798fc81cd4abf65de8923",
"assets/assets/entry_img/coffee.png": "118cdebf4aae8d1480f35b21e88b06c3",
"assets/assets/entry_img/dad.png": "d6ca640d5958b3ab789f908e85f58d36",
"assets/assets/entry_img/daughter.png": "c7e34100b2200c155fab3794563847ab",
"assets/assets/entry_img/girl.png": "824504a9106b939017887b2dbb18e986",
"assets/assets/entry_img/he.png": "7103af1dbc43c44fabaac1eb29c0755e",
"assets/assets/entry_img/juice.png": "fb32e6a3ffe621efb5fecb51b3c945e6",
"assets/assets/entry_img/me.png": "00a90fd837dbbf2737700c9fc9a3bc1e",
"assets/assets/entry_img/milk.png": "252577b31d5a489d4177be3ce57bab86",
"assets/assets/entry_img/missing.png": "deb658e016179ef1bb113712e73fe5da",
"assets/assets/entry_img/mom.png": "2ae2e6f70aba73038a4f8a614b5bcb09",
"assets/assets/entry_img/pear.png": "35ac28c041cf2a2ac54c716b084f4e83",
"assets/assets/entry_img/pointing.png": "1e57926e300c013b1e3c6cc4a9dbc946",
"assets/assets/entry_img/she.png": "ce9533e83ea18883243c24e0b39332d7",
"assets/assets/entry_img/sister.png": "c80e27184c8eb968039e4005cc79598c",
"assets/assets/entry_img/son.png": "24d70b1583dc0ca42e2d230716b5d3de",
"assets/assets/entry_img/tea.png": "25f80b195bc50d0ee3c9c14e2a4695fe",
"assets/assets/entry_img/they_fem.png": "bb74d3888b28115882fae091286c1a4b",
"assets/assets/entry_img/they_masc.png": "71a01e3f7e54834c99cd7c14eae14735",
"assets/assets/entry_img/water.png": "1a9f81c32645c500dd2d043288127256",
"assets/assets/entry_img/we.png": "bbfca50fb1f9cc2f1891052dc0d91b01",
"assets/assets/entry_img/you.png": "2d57a4891e026cd4340111035132af7d",
"assets/assets/entry_img/you_plural.png": "6c24a95c9b68ce3b0a9a11131dc13ec5",
"assets/assets/langs_img/eng.png": "84b8080deb7b0b08e00206951933e271",
"assets/assets/langs_img/fra.png": "e00514dbb3505bcf781f9a796307d9d9",
"assets/assets/langs_img/logo4.png": "891107237b552bdbf0f80062eeff3fa6",
"assets/assets/langs_img/pol.png": "0c7fde7505d268a24339ab807bb4dc46",
"assets/assets/langs_img/rus.png": "7b1c8157fd7a95fc224cb479c2e8d55f",
"assets/assets/langs_img/tur.png": "c2d19c7b449591ae1213f88a82e3e0cf",
"assets/assets/languages/english.json": "3a762449f4ed9dfaa48963c1d395e155",
"assets/assets/languages/french.json": "bf299a5e0a39324608b55ea877d5d419",
"assets/assets/languages/languages.json": "d07750d26a561f267b52e4e0fd4d12ab",
"assets/assets/languages/polish.json": "8d60ab59cf4c4697d14d220d93ba56ba",
"assets/assets/languages/russian.json": "df8e384509e9339953444bb6f41aaf29",
"assets/assets/languages/turkish.json": "13628416c5a0f8573ccd8569ca5557f9",
"assets/assets/lessons/lesson1.json": "f77253a15f26443824fdb12dc39fc9e7",
"assets/assets/lessons/lesson10.json": "c0c86f5e24332fd3f0473f384f028cf3",
"assets/assets/lessons/lesson11.json": "ab92a727d8114d8df2cf01898c8976fb",
"assets/assets/lessons/lesson2.json": "de89e03bd7a8dd7c726fcb9acfa3ae1d",
"assets/assets/lessons/lesson3.json": "8870df650d29c0dc6a8d5388efcdadae",
"assets/assets/lessons/lesson4.json": "fc9d4184165f4557bd65feeae6313796",
"assets/assets/lessons/lesson5.json": "f359537307a76d598d1f01cee7812c48",
"assets/assets/lessons/lesson6.json": "017cab595665ee9ded323de8dcad13e7",
"assets/assets/lessons/lesson7.json": "2df0b45dbd9cedef29c3a3f93c5d420b",
"assets/assets/lessons/lesson8.json": "b10d41949ab141e5160c4eedbfdcbb47",
"assets/assets/lessons/lesson9.json": "b5d4f3b7d7d581b164088e992b420514",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ae3da5d65ddc1d75c6c5f5e369a6a9e5",
"assets/NOTICES": "10e2f82e901b4f39207f74f373a5f4d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "df653f30662e6166c2f8fdfa9b1da910",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d79485204667d62c2ccd981b3ad4b2d5",
"/": "d79485204667d62c2ccd981b3ad4b2d5",
"main.dart.js": "8f5888271d5ee55c2762bab957d2f17f",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"splash/img/dark-1x.png": "0ca6f4f8bc8cb9d5bfa5389171f58677",
"splash/img/dark-2x.png": "90d0dee07eb26a51014959d8213f0b59",
"splash/img/dark-3x.png": "5612e9456323d5662fb522716676626f",
"splash/img/dark-4x.png": "19b80c8833c6bc4de5fc9c2f535d1475",
"splash/img/light-1x.png": "0ca6f4f8bc8cb9d5bfa5389171f58677",
"splash/img/light-2x.png": "90d0dee07eb26a51014959d8213f0b59",
"splash/img/light-3x.png": "5612e9456323d5662fb522716676626f",
"splash/img/light-4x.png": "19b80c8833c6bc4de5fc9c2f535d1475",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
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
