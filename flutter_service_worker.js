'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "561524bfeabc992dfe4e889f6b3dfa79",
".git/config": "ea0b14179d7d19ff399baadd48c2910c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "17e003bb8aa6469a689f9e5dbeb40fd4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "fbf978ce36a8edb2294bceefddff6f2e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dbf0e5a38423d4c6582947e110d714c4",
".git/logs/refs/heads/master": "dbf0e5a38423d4c6582947e110d714c4",
".git/logs/refs/remotes/origin/master": "c74852b9a2fef008bc9280660f5543ad",
".git/objects/8a/794c2d0d24e6637d7c336937e7145dad7ba932": "27ad047a7652e865f52c22ea11608e0a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/9ace9a166d4065fdb6d57392f6bb948ba330ff": "78e1535d6097df18970532be401b2567",
".git/objects/1c/9b6b5f15e938ced68fbd13d488f5eadb582107": "dc34cbe586020e59d8a9a445457302e8",
".git/objects/1f/8fe11a99e7a758796b70b3fec99c1eaa49faf7": "83f263b33f06e2817250834ea8843f28",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/cacf436c53004069f9f151281fa8b52439ff2e": "c69c7a8ae406f9a2e2a35c6d05623744",
".git/objects/24/ee7f9788a2a61a2da7f207ebbfdb6c6a055ddf": "7b55d6dbb0911850f652ffbd213ede36",
".git/objects/29/837e51f5bfbab36079b9c628a0d68dbbd1153b": "b19eecfc70c07c59742c036c8883b553",
".git/objects/29/fb516b0e5ead9d769636718092a7fb67461da6": "9d636cd68e06320548a7560e2bc7d1f2",
".git/objects/2e/4925908843c1c7728623527bea5198699fe602": "6f878a8d26053b4f36a46cfbd345a2bf",
".git/objects/2e/49bd530148b88edc0cefbff038821bfc10025b": "dd9e6cf9a78cfb8215df589b3d57db55",
".git/objects/2f/48a30578ca1881d717beefa550a1b5752e98cb": "1602bbb56a3eec53dc8cb3b59ea65c30",
".git/objects/30/86172edb0b70b1f819ae5ed9284ba39b89a196": "c32e3764c6b0acf03c6577e4f9965e53",
".git/objects/30/9fc410e90acec1df838bb465b9ec593e32be8d": "bb2f4e75f87b308dc2d71324af50e366",
".git/objects/31/854a3fcc29743b7b08b4ca980cc4d30cef2223": "d5e49c052e0334c23fb2b5ba5e6cd971",
".git/objects/3f/2023bfaa605bfe088259ba4553d17662df1649": "83104508bb218061c19d75b89e9f3d3e",
".git/objects/43/0575447fd19f32fc1f801a1d85781d9f74397d": "92ae29a896082aac67de9c541eadfb98",
".git/objects/44/a9afbf4c2c9f6024dbf81ae1303ce0dbc4ff96": "0658c2e29ddd01de4a9b6a53b18b1bdd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/f4d3eaa1f0f6520c5030350c5b764cba38d1c2": "131cf33b6bf4cbb4919544405a9b2270",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/66/7f6c8ee3de73780629bd92b4ae8f10dc95833a": "42c388e8d15e3f24c0db92d3c8ecdbb3",
".git/objects/69/a3548178819e5f368ce8e64c7d63f6ee17243c": "9ed70c9275a3b6ed47f14348a4e7c797",
".git/objects/6d/d66586fc9e0c654fa21b1013a83899e34c6023": "48344c6d1b7461b9f8b2f1f6b00923be",
".git/objects/79/b096439cfafeeb6a7d6d81ae7d0efc197beeb6": "bcdadb986b2da43b599d6f450a8bfc3a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/56b7493f6121e00da21673e3bab5df6976f167": "d6d201a162927391e9d2efa39d577cf2",
".git/objects/83/d1794ea4663f1b09996147f239df69c61f22de": "81dccadf6756220710843855c2683005",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/c719e25e86403e7d9c54593ca4cc321883bc2f": "22170480bc3798c856aca7f58e225aa9",
".git/objects/92/e7b2f2e38e95deed9e09b310c79c967b317610": "fec72822400caa8c6552aa166484cbc6",
".git/objects/a0/8fd505c9cacb8b91c1952c7d6a4357ca7afad7": "cee0238ffe0582cd2e452c6c70dc16c7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/d799d3e14430b8cc156e7bc89a7b3318532e65": "79ea14853ada1a0ff3da6013b574cac2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/baab4c11795e277a598f3fbd772262c3362190": "24045b5299ce5757d671ab7b557b4ce0",
".git/objects/b2/6539ff07e572943d139c50a75a566eca30bf9c": "161e07c05f1247c1160d0345272efecd",
".git/objects/b3/51b9486a7db4c134a1bea653a1eb007ad68d77": "86824343721c6d312258b07eba1e25ed",
".git/objects/b5/1150a0144aa3fdf4a2365e812a5ed4c788d22a": "3b98eb44f471fa41fabc1aaa2e1a147e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/cc/738c8f345d75aa9cd9bd439a21dfc49db0944e": "67604add48654477e2dc785a276ea7a1",
".git/objects/cd/5dd534825d79e57537721a49a1d7e19061e27b": "2d7b35718a07c395c40f6e8aec2c8d4e",
".git/objects/ce/76ab6621eec51ec8a31fa5952169857112ee2b": "7e352e0b9e8d8d91f080e04afd5f8339",
".git/objects/d1/b05b3d1703c7af35370dca4a502103fd2b12c6": "c159124fa4d73546ea9a94faf4c51bbe",
".git/objects/d1/eadb5c95e151c5316d655b372d4f0ee6815de4": "0581e00064a4e8a949a641c262c425bc",
".git/objects/d4/52a7543bd763475a78917645fb5939144ad547": "be950ee4d54e2d17879adb2045476947",
".git/objects/e3/2bca4c190ea07c995d129e8e0b4d66b9489d6f": "90b0d15a15d798b26b16849136e1f553",
".git/objects/e3/f1035f3520a8a0224efc34da121c101b9f7810": "6a69a6500ee39f0d05f9b3649f3d4c4b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/2bf11b5b5ab8471a07a8334c1b850533622183": "78e7b7078097189b2248fbe505d366e0",
".git/objects/ee/222a66af62f448f2a15569c48339c5ba8f410c": "4a35e795b44b607890a2d519b95c2520",
".git/objects/ee/61a4ad9bebc5435bcbbc491e9576b529d65141": "cf378900d8df280074e038fc2727d031",
".git/objects/ef/e23e4b02a82dd1cc0ff5f57916412c1d0939d8": "5b60791b9df796cfc889beaa14b2f735",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f9/f40f4286a4e3fd48e546fc107b6d757fb1b509": "d68e03fc9c6705bbe6e47f71bc7c8141",
".git/objects/fb/3f88f2ef6c20d888686b1b9f4fcf0f551906dc": "8b899a32f336a35445ee4926c20bb3d6",
".git/ORIG_HEAD": "b5859870613e92f373f07d5b2b3e5469",
".git/refs/heads/master": "f01c700696d9b71e3fe79dfc082a6910",
".git/refs/remotes/origin/master": "f01c700696d9b71e3fe79dfc082a6910",
"assets/AssetManifest.json": "6d49142504ef7fda6db4f9742e4e1f30",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "0cfe21fc996c45abf3b6512c10eb0e12",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/res/Cardgame.png": "c714716848dbd4a4596bfb6dd7ddb872",
"assets/res/CleverConvert.png": "ae36daf34f594709dd4a52a73923fcab",
"assets/res/ClojureAlgos.png": "fd3105c48eac94925c382b0105563bee",
"assets/res/ProfilePicture.png": "bd273dca5cc749eda223c1f6b6dcd4ee",
"assets/res/ProfilePictureOriginal.png": "7611ef657f33e8905cd6585448fa20ef",
"assets/res/ProfilePictureSquared.png": "9f6e2805dc7e12c9e82ada4511df9df6",
"assets/res/PyNN.png": "899d7c5c18f872a196571e765998d753",
"assets/res/RGBLed.png": "978f0b60c85b3d596907f0a0dcaf5806",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "084392f64b856ce68bdd7e2931e37526",
"/": "084392f64b856ce68bdd7e2931e37526",
"main.dart.js": "0f9bf1246e70ace34151723704f5cd03",
"manifest.json": "fd6494b37022485e5afc7fd40db2392b",
"version.json": "281f2a7b1646c3dea6feea25f04fa556"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
