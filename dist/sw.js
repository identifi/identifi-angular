var CACHE_NAME = 'iris-cache-v1';
var urlsToCache = [
  './',
  'index.html',
  'scripts/app.js',
  'scripts/vendor.js',
  'assets/js/ipfs.min.js',
  'assets/images/cover.jpg',
  'assets/fonts/Lato-900/Lato-900.woff2',
  'assets/fonts/Lato-700/Lato-700.woff2',
  'assets/fonts/Lato-300/Lato-300.woff2',
  'assets/fonts/Lato-regular/Lato-regular.woff2',
  'fonts/fontawesome-webfont.woff2',
  'fonts/glyphicons-halflings-regular.woff2',
  'assets/images/favicon.ico'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(function(err) {
        console.error('Caching error', err);
      })
  );
});

function fetchAndUpdate(request) {
  return fetch(request).then(
    function(response) {
      // Check if we received a valid response
      if(!response || response.status !== 200 || response.type !== 'basic') {
        return response;
      }

      // IMPORTANT: Clone the response. A response is a stream
      // and because we want the browser to consume the response
      // as well as the cache consuming the response, we need
      // to clone it so we have two streams.
      var responseToCache = response.clone();

      caches.open(CACHE_NAME)
        .then(function(cache) {
          cache.put(request, responseToCache);
        });

      return response;
    }
  );
}

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (self.location.host.indexOf('localhost') === 0) {
          console.log('not sw caching localhost');
        }
        else if (response) {
          console.log('cache hit', event.request);
          fetchAndUpdate(event.request);
          return response;
        }

        return fetchAndUpdate(event.request);
      })
    );
});

self.addEventListener('push', function(e) {
  var options = {
    body: 'This notification was generated from a push!',
    icon: 'images/icon128.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Explore this new world',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Close',
        icon: 'images/xmark.png'}
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  );
});
