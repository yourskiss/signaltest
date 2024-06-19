const assets = [
  "/assets/images/QR.png",
  "/assets/images/logo.png",
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("devkerakoll").then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

 