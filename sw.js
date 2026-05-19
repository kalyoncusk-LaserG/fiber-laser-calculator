// Service worker disabled - no caching
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
