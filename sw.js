// Minimal service worker — required by Chrome to allow "Install app" /
// standalone display when added to the home screen. Doesn't cache anything
// special; just needs to exist and respond to fetch so the site qualifies
// as installable.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => new Response('offline')));
});
