import React from 'react';
import './InteractiveMap.css';

const InteractiveMap = ({ 
  address = 'Москва, ул. Тверская, д. 1',
  height = '400px'
}) => {
  // Открытие карты в новой вкладке
  const openMap = () => {
    const url = `https://yandex.ru/maps/?ll=37.6176,55.7558&z=15&l=map&pt=37.6176,55.7558,pm2rdm&text=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  // Получение направления
  const getDirections = () => {
    const url = `https://yandex.ru/maps/?rtext=~${encodeURIComponent(address)}&rtt=auto`;
    window.open(url, '_blank');
  };

  return (
    <div className="interactive-map-container">
      <div className="map-controls">
        <div className="map-actions">
          <button 
            className="map-action-btn"
            onClick={openMap}
          >
            Открыть карту
          </button>
          <button 
            className="map-action-btn"
            onClick={getDirections}
          >
            Проложить маршрут
          </button>
        </div>
      </div>

      <div className="map-content">
        <div className="map-iframe-container" style={{ height }}>
          <iframe
            title="Yandex Maps"
            width="100%"
            height="100%"
            frameBorder="0"
            src={`https://yandex.ru/map-widget/v1/?ll=37.6176,55.7558&z=15&l=map&pt=37.6176,55.7558,pm2rdm&text=${encodeURIComponent(address)}`}
          />
        </div>
      </div>

      <div className="restaurant-info">
        <div className="info-item">
          <div>
            <h4>Адрес ресторана</h4>
            <p>{address}</p>
          </div>
        </div>
        
        <div className="info-item">
          <div>
            <h4>Часы работы</h4>
            <p>Ежедневно с 10:00 до 23:00</p>
          </div>
        </div>

        <div className="info-item">
          <div>
            <h4>Телефон</h4>
            <p>+7 (495) 123-45-67</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap; 