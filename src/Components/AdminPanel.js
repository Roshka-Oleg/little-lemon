import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Получаем данные пользователя
    const user = {
      user_agent: navigator.userAgent,
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    setUserData(user);
  }, []);

  const renderDashboard = () => (
    <div className="dashboard-content">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-content">
            <h3>Данные пользователя</h3>
            <div className="stat-details">
              <p>Разрешение: {userData?.screen_resolution}</p>
              <p>Язык: {userData?.language}</p>
              <p>Часовой пояс: {userData?.timezone}</p>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-cog"></i>
          </div>
          <div className="stat-content">
            <h3>Статус системы</h3>
            <div className="stat-details">
              <p>Приложение: ✅ Работает</p>
              <p>База данных: ✅ Подключена</p>
              <p>API: ✅ Доступен</p>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="stat-content">
            <h3>Статистика</h3>
            <div className="stat-details">
              <p>Бронирования: 0</p>
              <p>Заказы: 0</p>
              <p>Посетители: 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="settings-content">
      <h2>Настройки системы</h2>
      
      <div className="settings-section">
        <h3>Основные настройки</h3>
        <div className="setting-item">
          <label>Название ресторана</label>
          <input type="text" defaultValue="SAVVA" />
        </div>
        <div className="setting-item">
          <label>Адрес</label>
          <input type="text" defaultValue="Москва, ул. Тверская, д. 1" />
        </div>
        <div className="setting-item">
          <label>Телефон</label>
          <input type="text" defaultValue="+7 (495) 123-45-67" />
        </div>
        <button className="save-btn">Сохранить настройки</button>
      </div>
    </div>
  );

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Панель администратора SAVVA</h1>
        <p>Управление рестораном и мониторинг системы</p>
      </div>

      <div className="admin-content">
        <div className="admin-sidebar">
          <button 
            className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <i className="fas fa-tachometer-alt"></i>
            Дашборд
          </button>
          <button 
            className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <i className="fas fa-cog"></i>
            Настройки
          </button>
        </div>

        <div className="admin-main">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'settings' && renderSettings()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 