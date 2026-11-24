// Blendaroo moved to soundbysound.app. This replaces the old app's offline worker: it removes the old offline copy
// and then itself, so blendaroo.zanarmstrong.com always loads the moving page (index.html), which forwards the saved data.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const n of await caches.keys()) await caches.delete(n);
  await self.registration.unregister();
})()));
