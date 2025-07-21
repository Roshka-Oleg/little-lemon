import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Booking from './Components/Booking.js';
import Order from './Components/Order.js';
import ConfirmedBooking from './Components/ConfirmedBooking.js';
import ConfirmedOrder from './Components/ConfirmedOrder.js';
import AdminPanel from './Components/AdminPanel.js';
import InteractiveMap from './Components/InteractiveMap.js';

function App() {
  const navigate = useNavigate();
  const [lastBooking, setLastBooking] = useState(null);
  const [lastOrder, setLastOrder] = useState(null);

  // Генерация доступного времени
  const generateAvailableTimes = (date) => {
    const times = [];
    for(let i = 17; i <= 23; i++) {
      if(Math.random() < 0.7) {
        times.push(i + ':00');
      }
      if(Math.random() < 0.7) {
        times.push(i + ':30');
      }
    }
    return times;
  };

  const submitForm = (formData) => {
    setLastBooking(formData);
    navigate("/confirmed-booking");
  };

  const submitOrder = (orderData) => {
    setLastOrder(orderData);
    navigate("/confirmed-order");
  };

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/booking" element={<Booking generateTimes={generateAvailableTimes} submitForm={submitForm} />} />
        <Route path="/order" element={<Order onSubmit={submitOrder} />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking booking={lastBooking} />} />
        <Route path="/confirmed-order" element={<ConfirmedOrder order={lastOrder} />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/map" element={<InteractiveMap />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
