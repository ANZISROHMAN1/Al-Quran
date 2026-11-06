// Service Worker for Al-Qur'an Indonesia Digital (PWA)
const CACHE_NAME = 'quran-id-cache-v1';
const STATIC_ASSETS = [
  './',
  'index.html',
  'css/style.css',
  'js/app.js',
  'js/surah-data.js',
  'js/doa-data.js',
  'manifest.json',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

// Install Event - Pre-cache core shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Stale-while-revalidate for static, bypass audio streams
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Bypass audio streaming (mp3 / range requests) to avoid playback issues
  if (url.pathname.endsWith('.mp3') || event.request.headers.has('range')) {
    return;
  }

  // Handle API requests (EQuran / Quran API) with Network First then Cache
  if (url.origin.includes('equran.id') || url.origin.includes('api.quran')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Static shell: Cache First, fallback to Network
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch in background to update cache (stale-while-revalidate)
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse);
              });
            }
          })
          .catch(() => {/* offline fallback */});
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
