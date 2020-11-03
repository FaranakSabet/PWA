const staticCacheName = "site-static-v2"
const assets = [
  "/",
  "/index.html",
  "/app.js",
  "/index.js",
  "/styles.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "https://cdn.jsdelivr.net/npm/chart.js@2.8.0",
  "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
]
// install event
self.addEventListener("install", (evt) => {
    //console.log('service worker installed');
    evt.waitUntil(
      caches.open(staticCacheName).then((cache) => {
        console.log("caching shell assets")
        cache.addAll(assets)
      })
    )
  })
  // activate event
self.addEventListener("activate", (evt) => {
    //console.log('service worker activated');
    evt.waitUntil(
      caches.keys().then((keys) => {
        //console.log(keys);
        return Promise.all(keys.filter((key) => key !== staticCacheName).map((key) => caches.delete(key)))
      })
    )
  })