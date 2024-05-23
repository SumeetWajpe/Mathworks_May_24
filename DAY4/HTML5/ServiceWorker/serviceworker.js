self.addEventListener("install", e => {
  console.log(`Service worker : Installed !`);

  // configure the cache
  e.waitUntil(
    caches
      .open("CacheOne")
      .then(cache => cache.addAll(["Index.html", "AboutUs.html"]))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", () => {
  console.log("Service Worker :  Activated !");
});

self.addEventListener("fetch", e => {
  console.log(`Service Worker : Fetching !`);
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request))); // e.request -> (url)
});
