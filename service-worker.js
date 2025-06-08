const CACHE_NAME = 'menu-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/estilos.css',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Instala el service worker y almacena los archivos en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Intercepta las solicitudes y responde desde caché si es posible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
