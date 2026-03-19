const CACHE_NAME = "bluewave-cache-v1";

self.addEventListener("install", e => {
  console.log("Service Worker Installed");
});

self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request));
});