/* Wedding Fund service worker */
const CACHE = 'wedding-fund-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});

/* Weekly nudge — fires on supported browsers (Chrome/Android installed PWAs). */
self.addEventListener('periodicsync', event => {
  if (event.tag === 'weekly-checkin') {
    event.waitUntil(
      self.registration.showNotification('💍 Wedding fund check-in', {
        body: "Time to set aside this week's savings. Open the app to log it.",
        icon: './icon-192.png',
        badge: './icon-192.png',
        tag: 'weekly-checkin'
      })
    );
  }
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('./'));
});
