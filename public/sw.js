/* eslint-disable */
// Service Worker для SAVVA Restaurant
const CACHE_NAME = 'savva-restaurant-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/logo192.png',
  '/logo512.png',
  '/favicon.ico'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Перехват fetch запросов
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Возвращаем кэшированный ответ, если он есть
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Обработка push-уведомлений
self.addEventListener('push', (event) => {
  console.log('Push event received:', event);
  
  let options = {
    body: 'Новое уведомление от SAVVA Restaurant',
    icon: '/logo192.png',
    badge: '/logo192.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Открыть сайт',
        icon: '/logo192.png'
      },
      {
        action: 'close',
        title: 'Закрыть',
        icon: '/logo192.png'
      }
    ]
  };

  // Если есть данные в push-событии, используем их
  if (event.data) {
    try {
      const data = event.data.json();
      options = {
        ...options,
        body: data.body || options.body,
        title: data.title || 'SAVVA Restaurant',
        tag: data.tag || 'default',
        data: {
          ...options.data,
          ...data
        }
      };
    } catch (error) {
      console.error('Error parsing push data:', error);
    }
  }

  event.waitUntil(
    self.registration.showNotification('SAVVA Restaurant', options)
  );
});

// Обработка кликов по уведомлениям
self.addEventListener('notificationclick', (event) => {
  console.log('Notification click received:', event);
  
  event.notification.close();

  if (event.action === 'explore') {
    // Открываем сайт
    event.waitUntil(
      clients.openWindow('/')
    );
  } else if (event.action === 'close') {
    // Просто закрываем уведомление
    return;
  } else {
    // По умолчанию открываем сайт
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Обработка закрытия уведомлений
self.addEventListener('notificationclose', (event) => {
  console.log('Notification closed:', event);
});

// Обработка сообщений от основного потока
self.addEventListener('message', (event) => {
  console.log('Message received in service worker:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Фоновая синхронизация
self.addEventListener('sync', (event) => {
  console.log('Background sync event:', event);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Здесь можно добавить логику синхронизации данных
      console.log('Background sync completed')
    );
  }
});

// Обработка ошибок
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

// Обработка необработанных отклонений промисов
self.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection in Service Worker:', event.reason);
}); 