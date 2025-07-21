import React from "react";
import { useState } from "react";
import shefImage from '../images/shef.jpg';

const BookingForm = (props) => {
   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("")
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("+7 ");

   const formatPhoneNumber = (value) => {
     // Убираем все кроме цифр и +7
     const cleanValue = value.replace(/[^\d+]/g, '');
     
     // Если нет +7 в начале, добавляем
     if (!cleanValue.startsWith('+7')) {
       return '+7 ';
     }
     
     // Берем только цифры после +7
     const numbers = cleanValue.replace('+7', '').replace(/\D/g, '');
     
     // Ограничиваем длину до 10 цифр
     const limitedNumbers = numbers.slice(0, 10);
     
     // Форматируем номер
     if (limitedNumbers.length === 0) return '+7 ';
     if (limitedNumbers.length <= 3) return `+7 (${limitedNumbers}`;
     if (limitedNumbers.length <= 6) return `+7 (${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3)}`;
     if (limitedNumbers.length <= 8) return `+7 (${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3, 6)}-${limitedNumbers.slice(6)}`;
     return `+7 (${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3, 6)}-${limitedNumbers.slice(6, 8)}-${limitedNumbers.slice(8, 10)}`;
   };

   const handlePhoneChange = (e) => {
     const formatted = formatPhoneNumber(e.target.value);
     setPhone(formatted);
   };

   const handlePhoneKeyDown = (e) => {
     // Разрешаем Backspace, Delete, стрелки, Tab, Enter
     if ([8, 9, 13, 37, 38, 39, 40, 46].includes(e.keyCode)) {
       return;
     }
     
     // Разрешаем только цифры
     if (!/[0-9]/.test(e.key)) {
       e.preventDefault();
     }
   };

   const isPhoneValid = () => {
     const numbers = phone.replace(/\D/g, '');
     return numbers.length === 11; // +7 + 10 цифр
   };

   const handleSumbit = (e) => {
   e.preventDefault();
   props.submitForm({
      date,
      times,
      guests,
      occasion,
      name,
      phone
   });
   };

   const [availableTimes, setAvailableTimes] = useState([]);

   const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    if (selectedDate) {
      const times = props.generateTimes(new Date(selectedDate));
      setAvailableTimes(times);
    }
   }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: 'auto',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 350px',
        gap: '40px',
        alignItems: 'center'
      }}>
        
        {/* Форма бронирования */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(201, 160, 99, 0.2)'
        }}>
          <form onSubmit={handleSumbit} className="booking-form">
            <fieldset style={{border: 'none', padding: 0, margin: 0}}>
              
              <div style={{textAlign: 'center', marginBottom: '40px'}}>
                <h2 style={{
                  fontSize: '2.5rem', 
                  color: '#1a1a1a', 
                  marginBottom: '10px',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Бронирование стола</h2>
                <p style={{
                  color: '#666',
                  fontSize: '1.1rem',
                  margin: 0,
                  fontStyle: 'italic'
                }}>Забронируйте свой идеальный вечер в SAVVA</p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '25px',
                marginBottom: '25px'
              }}>
                <div>
                  <label htmlFor="book-date" style={{
                    fontWeight: '600', 
                    color: '#c9a063',
                    fontSize: '1rem',
                    marginBottom: '8px',
                    display: 'block'
                  }}>Дата</label>
                  <input 
                    id="book-date" 
                    value={date} 
                    onChange={handleDateChange} 
                    type="date" 
                    required
                    style={{
                      width: '100%',
                      padding: '16px',
                      borderRadius: '12px',
                      border: '2px solid #e0e0e0',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      background: '#faf9f6',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.border = '2px solid #c9a063';
                      e.target.style.boxShadow = '0 4px 12px rgba(201, 160, 99, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = '2px solid #e0e0e0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="book-time" style={{
                    fontWeight: '600', 
                    color: '#c9a063',
                    fontSize: '1rem',
                    marginBottom: '8px',
                    display: 'block'
                  }}>Время</label>
                  <select 
                    id="book-time" 
                    value={times} 
                    onChange={(e) => setTimes(e.target.value)} 
                    required
                    style={{
                      width: '100%',
                      padding: '16px',
                      borderRadius: '12px',
                      border: '2px solid #e0e0e0',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      background: '#faf9f6',
                      cursor: 'pointer',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.border = '2px solid #c9a063';
                      e.target.style.boxShadow = '0 4px 12px rgba(201, 160, 99, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = '2px solid #e0e0e0';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Выберите время</option>
                    {availableTimes.length > 0 ? 
                      availableTimes.map(time => (
                        <option key={time}>{time}</option>
                      )) : 
                      ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map(time => (
                        <option key={time}>{time}</option>
                      ))
                    }
                  </select>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '25px',
                marginBottom: '25px'
              }}>
                <div>
                  <label htmlFor="book-guests" style={{
                    fontWeight: '600', 
                    color: '#c9a063',
                    fontSize: '1rem',
                    marginBottom: '8px',
                    display: 'block'
                  }}>Количество гостей</label>
                  <input 
                    id="book-guests" 
                    min="1" 
                    value={guests} 
                    onChange={(e) => {setGuests(e.target.value)}} 
                    type="number" 
                    placeholder="0" 
                    max={10} 
                    required
                    style={{
                      width: '100%',
                      padding: '16px',
                      borderRadius: '12px',
                      border: '2px solid #e0e0e0',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      background: '#faf9f6',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.border = '2px solid #c9a063';
                      e.target.style.boxShadow = '0 4px 12px rgba(201, 160, 99, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = '2px solid #e0e0e0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="book-occasion" style={{
                    fontWeight: '600', 
                    color: '#c9a063',
                    fontSize: '1rem',
                    marginBottom: '8px',
                    display: 'block'
                  }}>Повод</label>
                  <select 
                    id="book-occasion" 
                    key={occasion} 
                    value={occasion} 
                    onChange={(e) => setOccasion(e.target.value)} 
                    required
                    style={{
                      width: '100%',
                      padding: '16px',
                      borderRadius: '12px',
                      border: '2px solid #e0e0e0',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      background: '#faf9f6',
                      cursor: 'pointer',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.border = '2px solid #c9a063';
                      e.target.style.boxShadow = '0 4px 12px rgba(201, 160, 99, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = '2px solid #e0e0e0';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Выберите повод</option>
                    <option>День рождения</option>
                    <option>Годовщина</option>
                    <option>Деловая встреча</option>
                    <option>Романтический ужин</option>
                    <option>Семейный праздник</option>
                  </select>
                </div>
              </div>

              <div style={{marginBottom: '25px'}}>
                <label htmlFor="book-name" style={{
                  fontWeight: '600', 
                  color: '#c9a063',
                  fontSize: '1rem',
                  marginBottom: '8px',
                  display: 'block'
                }}>Имя</label>
                <input 
                  id="book-name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  type="text" 
                  required
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '2px solid #e0e0e0',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    background: '#faf9f6',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '2px solid #c9a063';
                    e.target.style.boxShadow = '0 4px 12px rgba(201, 160, 99, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '2px solid #e0e0e0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{marginBottom: '40px'}}>
                <label htmlFor="book-phone" style={{
                  fontWeight: '600', 
                  color: '#c9a063',
                  fontSize: '1rem',
                  marginBottom: '8px',
                  display: 'block'
                }}>Телефон *</label>
                <input 
                  id="book-phone" 
                  value={phone} 
                  onChange={handlePhoneChange} 
                  onKeyDown={handlePhoneKeyDown}
                  placeholder="+7 (___) ___-__-__"
                  pattern="\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}"
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '12px',
                    border: isPhoneValid() && phone.length > 3 ? '2px solid #4CAF50' : '2px solid #e0e0e0',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    background: '#faf9f6',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '2px solid #c9a063';
                    e.target.style.boxShadow = '0 4px 12px rgba(201, 160, 99, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = isPhoneValid() && phone.length > 3 ? '2px solid #4CAF50' : '2px solid #e0e0e0';
                    e.target.style.boxShadow = 'none';
                  }}
                  required 
                />
                {phone.length > 3 && !isPhoneValid() && (
                  <span style={{
                    color: '#ff6584', 
                    fontSize: '0.9rem', 
                    marginTop: '8px',
                    display: 'block'
                  }}>
                    Введите полный номер телефона (10 цифр после +7)
                  </span>
                )}
              </div>

              <div style={{textAlign: 'center'}}>
                <button 
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '18px 40px',
                    borderRadius: '15px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    minWidth: '250px',
                    boxShadow: '0 8px 20px rgba(201, 160, 99, 0.3)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 25px rgba(201, 160, 99, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 20px rgba(201, 160, 99, 0.3)';
                  }}
                >
                  Забронировать стол
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        {/* Фото хоста */}
        <div style={{
          textAlign: 'center',
          position: 'relative'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
            borderRadius: '20px',
            padding: '40px 30px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '250px',
              height: '350px',
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
              borderRadius: '15px',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid rgba(255, 255, 255, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img 
                src={shefImage} 
                alt="Шеф-повар SAVVA"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
              />
            </div>
            
            <h3 style={{
              color: 'white',
              fontSize: '1.5rem',
              marginBottom: '10px',
              fontWeight: '600'
            }}>Наш шеф-повар</h3>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Добро пожаловать в SAVVA! Наш опытный шеф-повар создаст для вас незабываемые кулинарные впечатления
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              marginTop: '20px'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '10px 15px',
                borderRadius: '10px',
                color: 'white',
                fontSize: '0.9rem'
              }}>
                ⭐ 5.0
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '10px 15px',
                borderRadius: '10px',
                color: 'white',
                fontSize: '0.9rem'
              }}>
                🏆 Лучший ресторан
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
