// Minimal service worker for the "English Journey" app only.
// Uniquely named/scoped so it never conflicts with any other app in this repo.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => new Response('offline')));
});
