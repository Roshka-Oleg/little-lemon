import React from "react";
import { Link } from "react-router-dom";

const ConfirmedBooking = ({ booking }) => {
    if (!booking) {
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
                    }}>Нет данных о бронировании</h1>
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
    
    return(
        <div style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            minHeight: '100vh',
            padding: '40px 20px'
        }}>
            <div style={{
                maxWidth: '800px',
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
                    }}>Бронирование подтверждено!</h1>
                    
                    <p style={{
                        color: '#666',
                        fontSize: '1.2rem',
                        marginBottom: '40px',
                        fontStyle: 'italic'
                    }}>
                        Мы свяжемся с вами в ближайшее время для подтверждения
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
                        }}>Детали бронирования</h2>
                        
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '20px'
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
                                <div style={{color: '#666'}}>{booking.name}</div>
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
                                <div style={{color: '#666'}}>{booking.phone}</div>
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
                                }}>📅</div>
                                <div style={{
                                    fontWeight: '600',
                                    color: '#1a1a1a',
                                    marginBottom: '5px'
                                }}>Дата</div>
                                <div style={{color: '#666'}}>{booking.date}</div>
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
                                }}>🕐</div>
                                <div style={{
                                    fontWeight: '600',
                                    color: '#1a1a1a',
                                    marginBottom: '5px'
                                }}>Время</div>
                                <div style={{color: '#666'}}>{booking.times}</div>
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
                                }}>👥</div>
                                <div style={{
                                    fontWeight: '600',
                                    color: '#1a1a1a',
                                    marginBottom: '5px'
                                }}>Гости</div>
                                <div style={{color: '#666'}}>{booking.guests} человек</div>
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
                                }}>🎉</div>
                                <div style={{
                                    fontWeight: '600',
                                    color: '#1a1a1a',
                                    marginBottom: '5px'
                                }}>Повод</div>
                                <div style={{color: '#666'}}>{booking.occasion}</div>
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
                        }}>Ждем вас в ресторане SAVVA!</div>
                        <div style={{
                            fontSize: '1rem',
                            opacity: 0.9
                        }}>
                            Наш менеджер свяжется с вами в течение 30 минут для подтверждения бронирования
                        </div>
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
                        
                        <Link to="/booking" style={{textDecoration: 'none'}}>
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
                                Забронировать еще
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmedBooking;