# 🚀 Руководство по интеграции SAVVA Restaurant

Это руководство поможет настроить все внешние интеграции для полноценной работы сайта ресторана SAVVA.

## 📧 EmailJS - Отправка писем

### 1. Регистрация в EmailJS
1. Перейдите на [emailjs.com](https://www.emailjs.com/)
2. Создайте аккаунт и войдите
3. Создайте новый Email Service (Gmail, Outlook, или другой)
4. Создайте Email Template для бронирований

### 2. Настройка шаблонов
Создайте следующие шаблоны:

#### Шаблон бронирования (booking_template):
```html
Здравствуйте, {{to_name}}!

Ваше бронирование в ресторане {{restaurant_name}} подтверждено:

📅 Дата: {{booking_date}}
🕐 Время: {{booking_time}}
👥 Количество гостей: {{guests}}
📞 Телефон: {{phone}}
💬 Дополнительные пожелания: {{message}}

📍 Адрес ресторана: {{restaurant_address}}
📞 Телефон: {{restaurant_phone}}

Ждем вас в гости!

С уважением,
Команда SAVVA
```

#### Шаблон заказа (order_template):
```html
Здравствуйте, {{to_name}}!

Ваш заказ в ресторане {{restaurant_name}} принят:

🍽️ Заказ: {{order_items}}
💰 Сумма: {{total_amount}} ₽
📍 Адрес доставки: {{delivery_address}}
📞 Телефон: {{phone}}

📞 Телефон ресторана: {{restaurant_phone}}

Спасибо за заказ!

С уважением,
Команда SAVVA
```

### 3. Обновление конфигурации
В файле `src/services/emailService.js` замените:
```javascript
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID', // Ваш Service ID
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID', // Ваш Template ID
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY', // Ваш Public Key
};
```

## 🗺️ Yandex Maps API

### 1. Получение API ключа
1. Перейдите в [Yandex Cloud](https://cloud.yandex.ru/)
2. Создайте новый аккаунт или войдите в существующий
3. Создайте платежный аккаунт
4. Включите следующие API:
   - Maps API
   - Geocoding API
   - Search API
5. Создайте API ключ в разделе "API Keys"

### 2. Обновление конфигурации
В файле `src/services/mapService.js` замените:
```javascript
const MAP_CONFIG = {
  yandex: {
    apiKey: 'YOUR_YANDEX_MAPS_API_KEY', // Ваш Yandex Maps API ключ
    // ...
  },
};
```

## 📊 AmoCRM - Управление клиентами

### 1. Настройка AmoCRM
1. Создайте аккаунт в [AmoCRM](https://www.amocrm.ru/)
2. Создайте воронку продаж для заявок с сайта
3. Получите Access Token через OAuth 2.0

### 2. Получение Access Token
```bash
# Замените на ваши данные
curl -X POST \
  https://YOUR_DOMAIN.amocrm.ru/oauth2/access_token \
  -H 'Content-Type: application/json' \
  -d '{
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET",
    "grant_type": "authorization_code",
    "code": "AUTHORIZATION_CODE",
    "redirect_uri": "YOUR_REDIRECT_URI"
  }'
```

### 3. Обновление конфигурации
В файле `src/services/crmService.js` замените:
```javascript
const CRM_CONFIG = {
  amocrm: {
    domain: 'YOUR_AMOCRM_DOMAIN', // yourcompany.amocrm.ru
    accessToken: 'YOUR_AMOCRM_ACCESS_TOKEN',
    pipelineId: 'YOUR_PIPELINE_ID', // ID воронки
    statusId: 'YOUR_STATUS_ID', // ID статуса "Новые заявки"
  },
};
```

## 📈 Google Analytics 4

### 1. Создание аккаунта
1. Перейдите в [Google Analytics](https://analytics.google.com/)
2. Создайте новый аккаунт и ресурс
3. Получите Measurement ID (G-XXXXXXXXXX)

### 2. Добавление в HTML
В файле `public/index.html` добавьте:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Обновление конфигурации
В файле `src/services/analyticsService.js` замените:
```javascript
const ANALYTICS_CONFIG = {
  googleAnalytics: {
    measurementId: 'G-XXXXXXXXXX', // Ваш Measurement ID
    // ...
  },
};
```

## 📱 Yandex Metrika

### 1. Создание счетчика
1. Перейдите в [Yandex Metrika](https://metrika.yandex.ru/)
2. Создайте новый счетчик
3. Получите Counter ID

### 2. Добавление в HTML
В файле `public/index.html` добавьте:
```html
<!-- Yandex Metrika -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(XXXXXXXXXX, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/XXXXXXXXXX" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
```

### 3. Обновление конфигурации
В файле `src/services/analyticsService.js` замените:
```javascript
const ANALYTICS_CONFIG = {
  yandexMetrika: {
    counterId: 'XXXXXXXXXX', // Ваш Counter ID
    // ...
  },
};
```

## 🔔 Push-уведомления

### 1. Генерация VAPID ключей
```bash
# Установите web-push
npm install web-push -g

# Генерируйте ключи
web-push generate-vapid-keys
```

### 2. Создание Service Worker
Создайте файл `public/sw.js`:
```javascript
self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),
    icon: '/logo192.png',
    badge: '/logo192.png',
    vibrate: [200, 100, 200],
  };

  event.waitUntil(
    self.registration.showNotification('SAVVA Restaurant', options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
```

### 3. Обновление конфигурации
В файле `src/services/notificationService.js` замените:
```javascript
const NOTIFICATION_CONFIG = {
  push: {
    vapidPublicKey: 'YOUR_VAPID_PUBLIC_KEY',
    vapidPrivateKey: 'YOUR_VAPID_PRIVATE_KEY',
  },
};
```

## 📞 SMS-уведомления

### 1. Выбор SMS-провайдера
Рекомендуемые провайдеры:
- [SMS.ru](https://sms.ru/)
- [Twilio](https://www.twilio.com/)
- [SMSC.ru](https://smsc.ru/)

### 2. Обновление конфигурации
В файле `src/services/notificationService.js` замените:
```javascript
const NOTIFICATION_CONFIG = {
  sms: {
    apiKey: 'YOUR_SMS_API_KEY',
    sender: 'SAVVA',
  },
};
```

## 🤖 Telegram Bot

### 1. Создание бота
1. Найдите @BotFather в Telegram
2. Отправьте команду `/newbot`
3. Следуйте инструкциям для создания бота
4. Получите Bot Token

### 2. Получение Chat ID
1. Добавьте бота в нужный чат
2. Отправьте сообщение в чат
3. Перейдите по ссылке: `https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates`
4. Найдите `chat.id` в ответе

### 3. Обновление конфигурации
В файле `src/services/notificationService.js` замените:
```javascript
const NOTIFICATION_CONFIG = {
  telegram: {
    botToken: 'YOUR_TELEGRAM_BOT_TOKEN',
    chatId: 'YOUR_TELEGRAM_CHAT_ID',
  },
};
```

## 🔧 Установка зависимостей

```bash
cd project
npm install
```

## 🚀 Запуск проекта

```bash
npm start
```

## 📋 Проверка интеграций

1. Откройте админ-панель: `/admin`
2. Перейдите на вкладку "Тестирование"
3. Протестируйте каждую интеграцию
4. Проверьте статус конфигурации на вкладке "Дашборд"

## 🔒 Безопасность

### Важные рекомендации:
1. **Никогда не коммитьте API ключи в Git**
2. Используйте переменные окружения для продакшена
3. Ограничьте доступ к API ключам в Google Cloud Console
4. Регулярно обновляйте токены доступа

### Создание .env файла:
```bash
# .env.local
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_YANDEX_MAPS_API_KEY=your_yandex_maps_key
REACT_APP_AMOCRM_DOMAIN=your_domain
REACT_APP_AMOCRM_ACCESS_TOKEN=your_access_token
REACT_APP_GA_MEASUREMENT_ID=your_ga_id
REACT_APP_YANDEX_METRIKA_ID=your_ym_id
```

## 📞 Поддержка

При возникновении проблем:
1. Проверьте консоль браузера на ошибки
2. Убедитесь, что все API ключи корректны
3. Проверьте статус сервисов в админ-панели
4. Обратитесь к документации соответствующих сервисов

---

**Удачной настройки! 🎉** 