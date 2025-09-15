const CACHE_NAME = 'heman-tools-v1';
const urlsToCache = [
  '/',
  'index.html',
  'image-tools.html',
  'image-resizer.html',
  'background-remover.html',
  'image-cropper.html',
  'image-compressor.html',
  'image-converter.html',
  'image-rotator.html',
  'image-flipper.html',
  'image-color-picker.html',
  'image-watermark-tool.html',
  'image-enhancer.html',
  'image-filter-tool.html',
  'image-blur-tool.html',
  'image-sharpen-tool.html',
  'image-drawing-tool.html',
  'image-meme-maker.html',
  'image-sticker-maker.html',
  'image-collage-maker.html',
  'image-frame-tool.html',
  'pan-card-resizer.html',
  'image-to-pdf-converter.html',
  'image-splitter-tool.html',
  'image-background-changer.html',
  'pdf-to-image-converter.html',
  'image-background-blur.html',
  'image-merge-tool.html',
  'image-thumbnail-maker.html',
  'icons/icon-192x192.png',
  'icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Serve from cache
        }
        return fetch(event.request); // Fetch from network
      })
  );
});