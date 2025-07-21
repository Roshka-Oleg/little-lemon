import React, { useState } from "react";
import crab from "../images/salats/crab.jpg";
import duck from "../images/salats/duck.jpg";
import mimoza from "../images/salats/mimoza.jpg";
import grebeshok from "../images/salats/grebeshok.jpg";
import seaFood from "../images/zacuski/sea-food.jpg";
import mimino from "../images/zacuski/mimino.jpg";
import ecler from "../images/zacuski/ecler.jpeg";
import salmon from "../images/zacuski/salmon.jpg";
// Импорты для рыбы
import seaBas from "../images/fish/sea bas.jpeg";
import dorado from "../images/fish/dorado.jpeg";
import salmonFish from "../images/fish/salmon.jpeg";
// Импорты для мяса
import oleni from "../images/meat/oleni.jpeg";
import tagliata from "../images/meat/Tagliata.jpeg";
import pojar from "../images/meat/pojar.jpeg";

const MENU = [
  {
    section: "Холодные закуски",
    items: [
      { id: 1, name: "Плато с морепродуктами", price: 10000, img: seaFood, desc: "Изысканное ассорти из свежих морепродуктов: креветки, мидии, кальмары и устрицы. Подается с лимоном и авторским соусом." },
      { id: 2, name: "Эклер с крабом", price: 900, img: ecler, desc: "Воздушный эклер, наполненный сочным крабовым мясом и пикантным соусом. Лёгкая закуска с морским акцентом." },
      { id: 3, name: "Гравлакс из лосося", price: 2400, img: salmon, desc: "Традиционный скандинавский гравлакс из свежего лосося, маринованный в соли, сахаре и укропе. Подается с горчичным соусом и ржаным хлебом." },
      { id: 4, name: "Тартар из говядины", price: 2400, img: mimino, desc: "Классический тартар из мраморной говядины с луком, каперсами и яичным желтком. Подается с хрустящим багетом." },
    ]
  },
  {
    section: "Салаты",
    items: [
      { id: 5, name: "Крабовый салат", price: 2700, img: crab, desc: "Сочный краб, свежие овощи и авторская заправка — классика в современной подаче." },
      { id: 6, name: "Салат с уткой", price: 2200, img: duck, desc: "Тёплая утка, печёная свёкла, микс зелени и ягодный соус. Богатый вкус и изысканная подача." },
      { id: 7, name: "Салат Мимоза", price: 2000, img: mimoza, desc: "Лёгкий слоёный салат с рыбой, яйцом и нежным соусом. Ностальгия в современной интерпретации." },
      { id: 8, name: "Салат с гребешком", price: 3000, img: grebeshok, desc: "Морской гребешок, свежие овощи и цитрусовая заправка. Лёгкость и элегантность вкуса." },
    ]
  },
  {
    section: "Рыба",
    items: [
      { id: 9, name: "Сибас на гриле", price: 2200, img: seaBas, desc: "Свежий сибас, приготовленный на углях с травами и лимоном. Нежное мясо с хрустящей корочкой, подается с овощами гриль." },
      { id: 10, name: "Дорадо на гриле", price: 3000, img: dorado, desc: "Золотистая дорадо с ароматными травами и чесноком. Мясо тает во рту, подается с соусом из белого вина." },
      { id: 11, name: "Стейк из лосося ", price: 2500, img: salmonFish, desc: "Сочный стейк из атлантического лосося с розовой сердцевиной. Подается с овощным рагу и соусом терияки." },
    ]
  },
  {
    section: "Мясо",
    items: [
      { id: 12, name: "Филе оленя", price: 2600, img: oleni, desc: "Нежное филе оленя с ягодным соусом и лесными грибами. Диетическое мясо с богатым вкусом дичи." },
      { id: 13, name: "Тальята из говядины", price: 3400, img: tagliata, desc: "Тонко нарезанная мраморная говядина с рукколой, пармезаном и бальзамическим соусом. Итальянская классика." },
      { id: 14, name: "Пожарская котлета", price: 2300, img: pojar, desc: "Классическая пожарская котлета из куриного филе в панировке. Подается с картофельным пюре и грибным соусом." },
    ]
  }
];

const flatMenu = MENU.flatMap(section => section.items);

const Order = ({ onSubmit }) => {
  const [order, setOrder] = useState(flatMenu.map(item => ({ ...item, quantity: 0 })));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 ");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredAddresses, setFilteredAddresses] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  // Отладочная информация
  console.log('MENU данные:', MENU);
  console.log('flatMenu данные:', flatMenu);

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

  const validateAddress = (value) => {
    const moscowKeywords = [
      'москва', 'москве', 'москвой', 'москву', 'москвой', 'московская', 'московский', 'московское',
      'мск', 'м.', 'г. москва', 'город москва', 'москва,', 'москва.', 'москва!', 'москва?'
    ];
    
    const lowerValue = value.toLowerCase().trim();
    
    // Проверяем, содержит ли адрес ключевые слова Москвы
    const isMoscow = moscowKeywords.some(keyword => lowerValue.includes(keyword));
    
    if (!isMoscow && value.trim().length > 0) {
      setAddressError("Доставка осуществляется только в пределах Москвы");
      return false;
    } else {
      setAddressError("");
      return true;
    }
  };

  const moscowAddresses = [
    "ул. Тверская, д. 1, кв. 5, Москва",
    "Ленинский проспект, д. 10, Москва",
    "Кутузовский проспект, д. 25, Москва",
    "ул. Арбат, д. 15, Москва",
    "Новый Арбат, д. 8, Москва",
    "ул. Покровка, д. 12, Москва",
    "ул. Маросейка, д. 3, Москва",
    "ул. Мясницкая, д. 20, Москва",
    "ул. Никольская, д. 7, Москва",
    "ул. Ильинка, д. 4, Москва"
  ];

  const handleQuantityChange = (id, value) => {
    setOrder(order.map(item => item.id === id ? { ...item, quantity: Math.max(0, Number(value)) } : item));
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    validateAddress(value);
    
    // Автодополнение
    if (value.trim().length > 2) {
      const filtered = moscowAddresses.filter(addr => 
        addr.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredAddresses(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
      setFilteredAddresses([]);
    }
  };

  const handleAddressSelect = (selectedAddress) => {
    setAddress(selectedAddress);
    setShowSuggestions(false);
    validateAddress(selectedAddress);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Возвращаемся на главную страницу
    window.history.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = order.filter(item => item.quantity > 0);
    if (items.length === 0) {
      alert("Пожалуйста, выберите хотя бы одно блюдо.");
      return;
    }
    if (!name || !phone) {
      alert("Пожалуйста, введите имя и телефон.");
      return;
    }
    if (!address.trim()) {
      alert("Пожалуйста, введите адрес доставки.");
      return;
    }
    if (!validateAddress(address)) {
      alert("Доставка осуществляется только в пределах Москвы.");
      return;
    }
    const orderInfo = { name, phone, address, items };
    onSubmit(orderInfo);
    setIsOpen(false);
  };

  const total = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        maxWidth: '95vw',
        maxHeight: '95vh',
        overflow: 'auto',
        position: 'relative',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        width: '100%'
      }}>
        {/* Кнопка закрытия */}
        <button 
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(201, 160, 99, 0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#c9a063',
            zIndex: 1001,
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#c9a063';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(201, 160, 99, 0.1)';
            e.target.style.color = '#c9a063';
          }}
        >
          ×
        </button>

        <div style={{background: '#fff', width: '100%', padding: '40px 20px'}}>
          <section style={{width: '100%', padding: '0 2vw'}}>
            <form
              onSubmit={handleSubmit}
              className="order-form"
              style={{width: '100%', padding: 0, margin: 0, boxShadow: 'none', maxWidth: 'none', background: 'transparent'}}
            >
              <h2 style={{ textAlign: 'center', marginBottom: '12px', color: '#1a1a1a', letterSpacing: '1px', fontSize: '2rem' }}>Онлайн-заказ</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '1800px', margin: '0 auto' }}>
                <label style={{ fontWeight: 600, color: '#c9a063' }}>Имя</label>
                <input 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  style={{
                    padding: '14px',
                    borderRadius: '10px',
                    border: '1.5px solid #e0e0e0',
                    fontSize: '1rem',
                    marginTop: '4px',
                    marginBottom: '10px',
                    outline: 'none',
                    transition: 'border 0.3s, box-shadow 0.3s',
                    background: '#faf9f6',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '2px solid #c9a063';
                    e.target.style.boxShadow = '0 2px 8px rgba(201, 160, 99, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1.5px solid #e0e0e0';
                    e.target.style.boxShadow = 'none';
                  }}
                  required 
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '1800px', margin: '0 auto' }}>
                <label style={{ fontWeight: 600, color: '#c9a063' }}>Телефон *</label>
                <input 
                  value={phone} 
                  onChange={handlePhoneChange} 
                  onKeyDown={handlePhoneKeyDown}
                  placeholder="+7 (___) ___-__-__"
                  pattern="\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}"
                  style={{
                    padding: '14px',
                    borderRadius: '10px',
                    border: isPhoneValid() && phone.length > 3 ? '2px solid #4CAF50' : '1.5px solid #e0e0e0',
                    fontSize: '1rem',
                    marginTop: '4px',
                    marginBottom: '10px',
                    outline: 'none',
                    transition: 'border 0.3s, box-shadow 0.3s',
                    background: '#faf9f6',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '2px solid #c9a063';
                    e.target.style.boxShadow = '0 2px 8px rgba(201, 160, 99, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = isPhoneValid() && phone.length > 3 ? '2px solid #4CAF50' : '1.5px solid #e0e0e0';
                    e.target.style.boxShadow = 'none';
                  }}
                  required 
                />
                {phone.length > 3 && !isPhoneValid() && (
                  <span style={{color: '#ff6584', fontSize: '0.9rem', marginTop: '-8px'}}>
                    Введите полный номер телефона (10 цифр после +7)
                  </span>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative', maxWidth: '2000px', margin: '0 auto' }}>
                <label style={{ fontWeight: 600, color: '#c9a063' }}>Адрес доставки *</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    value={address} 
                    onChange={handleAddressChange}
                    placeholder="Введите адрес в Москве (например: ул. Тверская, д. 1, кв. 5)"
                    style={{
                      padding: '14px',
                      borderRadius: '10px',
                      border: addressError ? '2px solid #ff6584' : '1.5px solid #e0e0e0',
                      fontSize: '1rem',
                      marginTop: '4px',
                      marginBottom: '10px',
                      outline: 'none',
                      transition: 'border 0.3s, box-shadow 0.3s',
                      background: '#faf9f6',
                      width: '100%',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.border = '2px solid #c9a063';
                      e.target.style.boxShadow = '0 2px 8px rgba(201, 160, 99, 0.15)';
                      if (address.trim().length > 2) {
                        setShowSuggestions(filteredAddresses.length > 0);
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.border = addressError ? '2px solid #ff6584' : '1.5px solid #e0e0e0';
                      e.target.style.boxShadow = 'none';
                      // Небольшая задержка, чтобы пользователь мог кликнуть на предложение
                      setTimeout(() => setShowSuggestions(false), 200);
                    }}
                    required 
                  />
                  
                  {/* Автодополнение */}
                  {showSuggestions && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      right: 0,
                      background: 'white',
                      border: '1px solid #e0e0e0',
                      borderRadius: '10px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                      zIndex: 1000,
                      maxHeight: '200px',
                      overflowY: 'auto'
                    }}>
                      {filteredAddresses.map((suggestion, index) => (
                        <div
                          key={index}
                          onClick={() => handleAddressSelect(suggestion)}
                          style={{
                            padding: '12px 16px',
                            cursor: 'pointer',
                            borderBottom: '1px solid #f0f0f0',
                            fontSize: '0.95rem',
                            color: '#1a1a1a',
                            transition: 'background 0.2s ease'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.background = 'rgba(201, 160, 99, 0.1)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.background = 'transparent';
                          }}
                        >
                          📍 {suggestion}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {addressError && (
                  <span style={{color: '#ff6584', fontSize: '0.9rem', marginTop: '-8px'}}>
                    {addressError}
                  </span>
                )}
                
                {!addressError && address.trim().length > 0 && (
                  <span style={{color: '#4CAF50', fontSize: '0.9rem', marginTop: '-8px'}}>
                    ✅ Адрес в Москве - доставка доступна
                  </span>
                )}
              </div>
              <h3 style={{ margin: '16px 0 0 0', color: '#1a1a1a' }}>Меню</h3>
              {MENU.map(section => (
                <div key={section.section} style={{marginBottom: 24}}>
                  <h4 style={{color: '#c9a063', fontSize: '1.15rem', margin: '18px 0 10px 0', fontWeight: 700}}>{section.section}</h4>
                  {section.items.length === 0 && <div style={{color: '#aaa', fontStyle: 'italic'}}>Временно нет блюд</div>}
                  <div className="order-row">
                  {section.items.map(item => (
                    <div key={item.id} className="order-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginBottom: '28px', border: '1px solid #eee', borderRadius: '16px', padding: '20px 16px', background: '#faf9f6', boxSizing: 'border-box', boxShadow: '0 2px 8px rgba(201,160,99,0.04)', minHeight: '520px', justifyContent: 'space-between' }}>
                      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100%'}}>
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          style={{ width: '180px', height: '180px', objectFit: 'cover', borderRadius: '14px', marginBottom: 8 }} 
                          onError={(e) => {
                            console.error('Ошибка загрузки изображения для:', item.name, item.img);
                            e.target.style.border = '2px solid red';
                            e.target.style.background = '#ffebee';
                          }}
                          onLoad={() => console.log('Изображение загружено успешно:', item.name)}
                        />
                        <span style={{ fontWeight: 700, fontSize: '1.12rem', textAlign: 'center', color: '#1a1a1a', marginBottom: 4, lineHeight: '1.3' }}>{item.name}</span>
                        {item.desc && <span style={{fontStyle: 'italic', color: '#666', fontSize: '1rem', textAlign: 'center', marginBottom: 8, flexGrow: 1, wordWrap: 'break-word', lineHeight: '1.5', width: '100%', boxSizing: 'border-box', padding: '0 8px', display: 'block'}}>{item.desc}</span>}
                      </div>
                      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
                        <span style={{ color: '#c9a063', fontWeight: 600, fontSize: '1.1rem', marginBottom: 4 }}>{item.price} ₽</span>
                        <input type="number" min="0" value={order.find(o => o.id === item.id)?.quantity || 0} onChange={e => handleQuantityChange(item.id, e.target.value)} style={{ width: '70px', padding: '8px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem', textAlign: 'center' }} />
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              ))}
              <div style={{ textAlign: 'right', fontWeight: 700, fontSize: '1.2rem', margin: '12px 0 0 0', color: '#c9a063' }}>
                Итого: {total} ₽
              </div>
              <button type="submit" style={{minWidth: 220, marginTop: 18}}>Оформить заказ</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Order; 