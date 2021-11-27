'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a6b44713dec38316640dfebb859aca85",
"assets/assets/carousels/1.jpg": "69c7e50b487c479c64a01037f9e2479d",
"assets/assets/carousels/10.jpg": "a09f3ea86591b11b96223cdd618cfe44",
"assets/assets/carousels/11.jpg": "833c341fc6a51f3b3a0db7e06fe26b3d",
"assets/assets/carousels/12.jpg": "d0140bb4307984581dea28c1700d93d5",
"assets/assets/carousels/13.jpg": "96b1a3011082a380b4faefb6b2cdb4f3",
"assets/assets/carousels/14.jpg": "61b27d71567c6236d1d624867747d758",
"assets/assets/carousels/15.jpg": "99fd8e72697fca631ea8c89307f80b9c",
"assets/assets/carousels/16.jpg": "5f035484d84c9410c812346ae48fd0ec",
"assets/assets/carousels/17.jpg": "627142b96cc939ded7eae332f9b0f3f2",
"assets/assets/carousels/18.jpg": "267e09962feb3934d4d5678d29bc16ef",
"assets/assets/carousels/19.jpg": "75bd6b6357e36bbacd9859bf03b66eb9",
"assets/assets/carousels/2.jpg": "1f0726bcbbe5fb80b284365af1f91110",
"assets/assets/carousels/20.jpg": "2ab198335f441c01d0783c5ce39585ce",
"assets/assets/carousels/21.jpg": "3780730f15a4782e074c1594233a0210",
"assets/assets/carousels/22.jpg": "ba1910d8e8e1385a954e5e55745ab342",
"assets/assets/carousels/23.jpg": "6bbc3c75ccce49258fde8f56f6afe300",
"assets/assets/carousels/24.jpg": "a88c372567a72b096f93aa36aea1257c",
"assets/assets/carousels/25.jpg": "89d815079f69e558a5a2f95449ab3939",
"assets/assets/carousels/26.jpg": "da8b4d12fd7b1069c33833df0b9238fa",
"assets/assets/carousels/27.jpg": "60b851180393bb53136154cc35a0a610",
"assets/assets/carousels/28.jpg": "08dcd2d98395683f439155f1064f938a",
"assets/assets/carousels/29.jpg": "bd5da72db24cf13fd9cb66a5a5d988cd",
"assets/assets/carousels/3.jpg": "6af8f7b6bbb47b196bffdc7bf6626b61",
"assets/assets/carousels/4.jpg": "4772221d1585138280c5f4bb29561dc1",
"assets/assets/carousels/5.jpg": "3b52fdba7ab9eb8ba5f10974503b0467",
"assets/assets/carousels/6.jpg": "1f6651d9dff39dc88f48cf02cc336528",
"assets/assets/carousels/7.jpg": "c3e6fbca66c7cbaada6cb6e808a80e53",
"assets/assets/carousels/8.jpg": "64f80b1b6b8c7ff623c7c4de783c51bb",
"assets/assets/carousels/9.jpg": "cafa3168b953041890edfe54f344e658",
"assets/assets/fonts/algerian.ttf": "b60bb3c69fd2ba6576a27f876ea95042",
"assets/assets/fonts/NexaBlack.otf": "9e6108697583d1f9be8bc4040d6195bf",
"assets/assets/fonts/NexaBold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/assets/fonts/NexaLight.otf": "e9f355b50d88d821f36342ea41bf94a2",
"assets/assets/fonts/NexaRegular.otf": "43af9a823810d7aea830a8db17ca902d",
"assets/assets/logo.png": "e8dc4507fbaeced891dad10ec98c6473",
"assets/assets/mock.jpg": "5304820876dc52b48559a8855baceeac",
"assets/assets/mock_mobile.jpg": "07379dfd28ccd4846c550e82a50cb87e",
"assets/assets/mock_tab.jpg": "3fa36a8a49555a1f2c2c4afaf1f2d60b",
"assets/FontManifest.json": "3019431c2742241cd9afe04153322fd5",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "cb6bf44c18c2de9ad32ed0a0f7562c04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"favicon.ico": "980e2d13ad3b4250ca5f820629ec7b03",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f8d0c7e840221b0b573cbd4d79a9ce02",
"/": "f8d0c7e840221b0b573cbd4d79a9ce02",
"main.dart.js": "298da474ed14b1e6519315560c97c305",
"manifest.json": "4ab83f7499ffbcda9dcdd9363fccaede",
"version.json": "4971293a743b20e2a71d11d8fc388915"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
