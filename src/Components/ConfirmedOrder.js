import React from "react";
import { Link } from "react-router-dom";

const ConfirmedOrder = ({ order }) => {
  if (!order) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '3rem',
            marginBottom: '20px',
            color: '#ff6584'
          }}>❌</div>
          <h1 style={{
            color: '#c9a063',
            fontSize: '1.5rem',
            marginBottom: '20px'
          }}>Нет данных о заказе</h1>
          <Link to="/" style={{textDecoration: 'none'}}>
            <button style={{
              background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(201, 160, 99, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              Вернуться на главную
            </button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '25px',
        padding: '60px 40px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Декоративный фон */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23c9a063" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          zIndex: 0
        }}></div>
        
        <div style={{position: 'relative', zIndex: 1}}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '30px',
            color: '#4CAF50',
            animation: 'bounce 1s ease-in-out'
          }}>✅</div>
          
          <h1 style={{
            color: '#1a1a1a', 
            fontSize: '2.5rem', 
            marginBottom: '10px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Ваш заказ оформлен!</h1>
          
          <p style={{
            color: '#666',
            fontSize: '1.2rem',
            marginBottom: '40px',
            fontStyle: 'italic'
          }}>
            Мы свяжемся с вами в ближайшее время для подтверждения заказа
          </p>
          
          <div style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            borderRadius: '20px',
            padding: '40px',
            marginBottom: '40px',
            textAlign: 'left',
            border: '2px solid rgba(201, 160, 99, 0.1)'
          }}>
            <h2 style={{
              color: '#c9a063',
              fontSize: '1.5rem',
              marginBottom: '25px',
              fontWeight: '700',
              textAlign: 'center'
            }}>Информация о заказе</h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '15px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  marginBottom: '10px',
                  color: '#c9a063'
                }}>👤</div>
                <div style={{
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '5px'
                }}>Имя</div>
                <div style={{color: '#666'}}>{order.name}</div>
              </div>
              
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '15px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  marginBottom: '10px',
                  color: '#c9a063'
                }}>📞</div>
                <div style={{
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '5px'
                }}>Телефон</div>
                <div style={{color: '#666'}}>{order.phone}</div>
              </div>
              
              {order.address && (
                <div style={{
                  background: 'white',
                  padding: '20px',
                  borderRadius: '15px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}>
                  <div style={{
                    fontSize: '1.5rem',
                    marginBottom: '10px',
                    color: '#c9a063'
                  }}>📍</div>
                  <div style={{
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '5px'
                  }}>Адрес доставки</div>
                  <div style={{color: '#666'}}>{order.address}</div>
                </div>
              )}
            </div>
            
            <h3 style={{
              color: '#1a1a1a', 
              marginBottom: '20px',
              fontSize: '1.3rem',
              fontWeight: '600',
              textAlign: 'center'
            }}>Детали заказа</h3>
            
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '25px',
              marginBottom: '20px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              {order.items.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: '1px solid #f0f0f0',
                  fontSize: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    flex: 1
                  }}>
                    <div style={{
                      fontSize: '1.2rem',
                      color: '#c9a063'
                    }}>🍽️</div>
                    <div>
                      <div style={{
                        fontWeight: '600',
                        color: '#1a1a1a',
                        marginBottom: '2px'
                      }}>{item.name}</div>
                      <div style={{
                        color: '#666',
                        fontSize: '0.9rem'
                      }}>{item.quantity} шт.</div>
                    </div>
                  </div>
                  <div style={{
                    fontWeight: '600',
                    color: '#c9a063',
                    fontSize: '1.1rem'
                  }}>
                    {item.price * item.quantity} ₽
                  </div>
                </div>
              ))}
              
              <div style={{ 
                textAlign: 'right', 
                fontWeight: '700', 
                fontSize: '1.4rem', 
                color: '#c9a063',
                borderTop: '2px solid #c9a063',
                paddingTop: '20px',
                marginTop: '20px'
              }}>
                Итого: {order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)} ₽
              </div>
            </div>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
            borderRadius: '15px',
            padding: '25px',
            marginBottom: '40px',
            color: 'white',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '10px'
            }}>Спасибо за заказ!</div>
            <div style={{
              fontSize: '1rem',
              opacity: 0.9,
              marginBottom: '15px'
            }}>
              Наш менеджер свяжется с вами в течение 30 минут для подтверждения заказа и уточнения времени доставки
            </div>
            {order.address && (
              <div style={{
                fontSize: '0.95rem',
                opacity: 0.95,
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                marginTop: '10px'
              }}>
                🚚 Доставка по адресу: {order.address}
              </div>
            )}
          </div>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/" style={{textDecoration: 'none'}}>
              <button style={{
                background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                color: 'white',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
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
              }}>
                На главную
              </button>
            </Link>
            
            <Link to="/order" style={{textDecoration: 'none'}}>
              <button style={{
                background: 'transparent',
                color: '#c9a063',
                border: '2px solid #c9a063',
                padding: '14px 30px',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#c9a063';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#c9a063';
                e.target.style.transform = 'translateY(0)';
              }}>
                Заказать еще
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedOrder; 