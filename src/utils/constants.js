// Константы для приложения SAVVA

export const RESTAURANT_INFO = {
  name: 'SAVVA',
  address: 'Москва, ул. Тверская, д. 1',
  phone: '+7 (495) 123-45-67',
  email: 'info@savva-restaurant.ru',
  workingHours: 'Ежедневно с 10:00 до 23:00',
  coordinates: {
    lat: 55.7558,
    lng: 37.6176
  }
};

export const DELIVERY_ZONE = {
  maxDistance: 15, // км
  freeDeliveryThreshold: 2000, // руб
  deliveryFee: 300 // руб
};

export const BOOKING_TIMES = {
  startHour: 17,
  endHour: 23,
  interval: 30 // минут
};

export const MENU_CATEGORIES = {
  appetizers: 'Закуски',
  salads: 'Салаты',
  meat: 'Мясные блюда',
  fish: 'Рыбные блюда',
  desserts: 'Десерты',
  drinks: 'Напитки'
};

export const ORDER_STATUSES = {
  new: 'Новый',
  confirmed: 'Подтвержден',
  preparing: 'Готовится',
  delivering: 'Доставляется',
  completed: 'Выполнен',
  cancelled: 'Отменен'
};

export const BOOKING_STATUSES = {
  new: 'Новый',
  confirmed: 'Подтвержден',
  completed: 'Выполнен',
  cancelled: 'Отменен'
}; 