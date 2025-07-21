// Утилиты валидации для SAVVA

// Валидация телефона
export const validatePhone = (phone) => {
  const phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
  return phoneRegex.test(phone);
};

// Валидация email
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Валидация адреса доставки (Москва)
export const validateMoscowAddress = (address) => {
  if (!address || address.trim().length < 10) {
    return false;
  }
  
  const moscowKeywords = [
    'москва', 'мск', 'московская', 'московский', 'московское',
    'московские', 'московская область', 'подмосковье'
  ];
  
  const addressLower = address.toLowerCase();
  return moscowKeywords.some(keyword => addressLower.includes(keyword));
};

// Валидация даты (не в прошлом)
export const validateDate = (date) => {
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
};

// Валидация времени
export const validateTime = (time) => {
  if (!time) return false;
  const [hours, minutes] = time.split(':').map(Number);
  return hours >= 17 && hours <= 23 && (minutes === 0 || minutes === 30);
}; 