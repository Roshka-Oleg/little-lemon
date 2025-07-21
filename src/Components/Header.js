import React, { useState, useEffect } from "react";
import seaFood from "../images/zacuski/sea-food.jpg";
import salmon from "../images/zacuski/salmon.jpg";
import tagliata from "../images/meat/Tagliata.jpeg";
import shef2Image from "../images/shef2.jpg";
import rest from "../images/rest.jpg";
import { Link } from "react-router-dom";
import FullMenuModal from "./FullMenuModal.js";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

    useEffect(() => {
        // Анимация появления элементов
        const timer = setTimeout(() => setIsVisible(true), 100);
        
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return(
        <div style={{background: '#fff'}}>
            {/* Герой-секция */}
            <header style={{
                background: 'linear-gradient(135deg, #faf9f6 0%, #f5f3f0 100%)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 40px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <div style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'all 0.8s ease-out'
                    }}>
                        <div style={{
                            display: 'inline-block',
                            background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                            color: 'white',
                            padding: '8px 20px',
                            borderRadius: '25px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '20px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            🏆 Лучший ресторан 2024
                        </div>
                        
                        <h1 style={{
                            fontSize: '4.5rem',
                            fontWeight: '900',
                            color: '#1a1a1a',
                            margin: '0 0 20px 0',
                            lineHeight: '1.1',
                            background: 'linear-gradient(135deg, #1a1a1a 0%, #c9a063 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>SAVVA</h1>
                        
                        <h2 style={{
                            fontSize: '2.2rem',
                            fontWeight: '300',
                            color: '#c9a063',
                            margin: '0 0 30px 0',
                            fontStyle: 'italic',
                            letterSpacing: '1px'
                        }}>Гастрономический ресторан</h2>
                        
                        <p style={{
                            fontSize: '1.3rem',
                            color: '#666',
                            lineHeight: '1.8',
                            margin: '0 0 40px 0',
                            maxWidth: '500px'
                        }}>
                            Добро пожаловать в мир изысканной кухни и непревзойденного сервиса. 
                            SAVVA — это место, где традиции встречаются с инновациями, 
                            а каждое блюдо становится произведением искусства.
                        </p>
                        
                        <div style={{
                            display: 'flex',
                            gap: '20px',
                            marginBottom: '50px',
                            flexWrap: 'wrap'
                        }}>
                            <Link to="/booking" style={{textDecoration: 'none'}}>
                                <button style={{
                                    background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '18px 36px',
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 10px 25px rgba(201, 160, 99, 0.3)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    🍽️ Забронировать стол
                                </button>
                            </Link>
                            <Link to="/order" style={{textDecoration: 'none'}}>
                                <button style={{
                                    background: 'transparent',
                                    color: '#c9a063',
                                    border: '2px solid #c9a063',
                                    padding: '16px 34px',
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    📱 Заказать онлайн
                                </button>
                            </Link>
                        </div>
                        
                        <div style={{
                            display: 'flex',
                            gap: '40px',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    color: '#c9a063',
                                    fontWeight: 'bold',
                                    marginBottom: '8px'
                                }}>⭐ 4.9</div>
                                <div style={{color: '#666', fontSize: '0.9rem', fontWeight: '500'}}>Рейтинг</div>
                            </div>
                            <div style={{
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    color: '#c9a063',
                                    fontWeight: 'bold',
                                    marginBottom: '8px'
                                }}>🏆</div>
                                <div style={{color: '#666', fontSize: '0.9rem', fontWeight: '500'}}>Лучший ресторан</div>
                            </div>
                            <div style={{
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    color: '#c9a063',
                                    fontWeight: 'bold',
                                    marginBottom: '8px'
                                }}>🍷</div>
                                <div style={{color: '#666', fontSize: '0.9rem', fontWeight: '500'}}>500+ вин</div>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                        transition: 'all 0.8s ease-out 0.4s'
                    }}>
                        <img src={rest} alt="Изысканное блюдо SAVVA" style={{
                            width: '500px',
                            height: '500px',
                            objectFit: 'cover',
                            borderRadius: '30px',
                            boxShadow: '0 30px 60px rgba(201,160,99,0.3)',
                            border: '8px solid white'
                        }} />
                    </div>
                </div>
            </header>

            {/* О ресторане */}
            <section style={{
                padding: '120px 40px',
                background: 'white',
                position: 'relative'
            }}>
                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '80px'
                    }}>
                        <h2 style={{
                            fontSize: '3.5rem',
                            color: '#1a1a1a',
                            marginBottom: '20px',
                            fontWeight: '800'
                        }}>О ресторане</h2>
                        <div style={{
                            width: '80px',
                            height: '4px',
                            background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                            margin: '0 auto 30px auto',
                            borderRadius: '2px'
                        }}></div>
                        <p style={{
                            fontSize: '1.3rem',
                            color: '#666',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: '1.8'
                        }}>
                            SAVVA — это место, где каждая деталь имеет значение. 
                            Мы создаем уникальные гастрономические впечатления, 
                            сочетая традиционные рецепты с современными техниками.
                        </p>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '20px',
                            marginTop: '30px',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{
                                background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                                color: 'white',
                                padding: '15px 25px',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                boxShadow: '0 8px 20px rgba(201, 160, 99, 0.3)'
                            }}>
                                ⭐ Звезда Мишлен
                            </div>
                            <div style={{
                                background: 'rgba(201, 160, 99, 0.1)',
                                color: '#c9a063',
                                padding: '15px 25px',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                border: '2px solid #c9a063'
                            }}>
                                🏆 Лучший ресторан 2024
                            </div>
                        </div>
                    </div>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '80px',
                        alignItems: 'center'
                    }}>
                        <div>
                            <div style={{
                                background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                                borderRadius: '25px',
                                padding: '50px',
                                color: 'white',
                                textAlign: 'center',
                                boxShadow: '0 20px 40px rgba(201, 160, 99, 0.2)'
                            }}>
                                <img 
                                    src={shef2Image} 
                                    alt="Шеф-повар Андрей Шмаков"
                                    style={{
                                        width: '280px',
                                        height: '280px',
                                        borderRadius: '20px',
                                        objectFit: 'cover',
                                        border: '5px solid white',
                                        marginBottom: '30px',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
                                    }}
                                />
                                <h3 style={{
                                    fontSize: '2rem',
                                    marginBottom: '15px',
                                    fontWeight: '700'
                                }}>Андрей Шмаков</h3>
                                <p style={{
                                    fontSize: '1.1rem',
                                    opacity: 0.95,
                                    lineHeight: '1.6'
                                }}>
                                    Наш шеф-повар с 15-летним опытом работы в лучших ресторанах мира. 
                                    Создает уникальные блюда, сочетающие традиции и инновации.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 style={{
                                fontSize: '2.5rem',
                                color: '#1a1a1a',
                                marginBottom: '30px',
                                fontWeight: '700'
                            }}>Наша философия</h3>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '25px'
                            }}>
                                {[
                                    { icon: '🌟', title: 'Качество', desc: 'Используем только свежие ингредиенты от проверенных поставщиков' },
                                    { icon: '🎨', title: 'Креативность', desc: 'Каждое блюдо — это произведение искусства' },
                                    { icon: '❤️', title: 'Забота', desc: 'Индивидуальный подход к каждому гостю' }
                                ].map((item, index) => (
                                    <div key={index} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px'
                                    }}>
                                        <div style={{
                                            fontSize: '2rem',
                                            color: '#c9a063'
                                        }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 style={{
                                                fontSize: '1.3rem',
                                                color: '#1a1a1a',
                                                marginBottom: '10px',
                                                fontWeight: '600'
                                            }}>{item.title}</h4>
                                            <p style={{
                                                color: '#666',
                                                lineHeight: '1.7'
                                            }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Меню */}
            <section style={{
                background: 'linear-gradient(135deg, #faf9f6 0%, #f5f3f0 100%)',
                padding: '120px 40px',
                position: 'relative'
            }}>
                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <div>
                        <h2 style={{
                            fontSize: '3.5rem',
                            color: '#1a1a1a',
                            marginBottom: '20px',
                            fontWeight: '800'
                        }}>Наше меню</h2>
                        <div style={{
                            width: '80px',
                            height: '4px',
                            background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                            margin: '0 auto 30px auto',
                            borderRadius: '2px'
                        }}></div>
                        <p style={{
                            fontSize: '1.3rem',
                            color: '#666',
                            marginBottom: '80px',
                            maxWidth: '600px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            lineHeight: '1.8'
                        }}>
                            Откройте для себя уникальные вкусы и ароматы нашей авторской кухни
                        </p>
                    </div>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '40px',
                        marginBottom: '60px'
                    }}>
                        {[
                            { 
                                icon: '🥗', 
                                title: 'Холодные закуски', 
                                desc: 'Свежие салаты, тартары, карпаччо и другие изысканные закуски', 
                                price: 'От 800 ₽',
                                image: seaFood,
                                popular: 'Плато с морепродуктами'
                            },
                            { 
                                icon: '🐟', 
                                title: 'Рыбные блюда', 
                                desc: 'Свежая рыба и морепродукты, приготовленные по авторским рецептам', 
                                price: 'От 1200 ₽',
                                image: salmon,
                                popular: 'Гравлакс из лосося'
                            },
                            { 
                                icon: '🥩', 
                                title: 'Мясные блюда', 
                                desc: 'Премиальное мясо, приготовленное с использованием современных техник', 
                                price: 'От 1500 ₽',
                                image: tagliata,
                                popular: 'Тальята из говядины'
                            }
                        ].map((item, index) => (
                            <div key={index} style={{
                                background: 'white',
                                borderRadius: '25px',
                                padding: '0',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                                transition: 'all 0.4s ease',
                                cursor: 'pointer',
                                border: '1px solid rgba(201, 160, 99, 0.1)',
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: '500px'
                            }}>
                                <div style={{
                                    position: 'relative',
                                    height: '250px',
                                    overflow: 'hidden'
                                }}>
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '15px',
                                        right: '15px',
                                        background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                                        color: 'white',
                                        padding: '8px 15px',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: '600',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        {item.icon}
                                    </div>
                                </div>
                                <div style={{
                                    padding: '30px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 'calc(100% - 250px)'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        color: '#1a1a1a',
                                        marginBottom: '15px',
                                        fontWeight: '700'
                                    }}>{item.title}</h3>
                                    <p style={{
                                        color: '#666',
                                        lineHeight: '1.7',
                                        marginBottom: '20px',
                                        flexGrow: 1
                                    }}>
                                        {item.desc}
                                    </p>
                                    <div style={{
                                        marginBottom: '15px'
                                    }}>
                                        <div style={{
                                            color: '#c9a063',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            marginBottom: '5px'
                                        }}>
                                            Популярное блюдо:
                                        </div>
                                        <div style={{
                                            color: '#1a1a1a',
                                            fontSize: '1rem',
                                            fontWeight: '500',
                                            fontStyle: 'italic'
                                        }}>
                                            {item.popular}
                                        </div>
                                    </div>
                                    <div style={{
                                        color: '#c9a063',
                                        fontSize: '1.1rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        {item.price}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div>
                        <button 
                            onClick={() => setIsMenuModalOpen(true)}
                            style={{
                                background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                                color: 'white',
                                border: 'none',
                                padding: '20px 40px',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 10px 25px rgba(201, 160, 99, 0.3)',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 15px 30px rgba(201, 160, 99, 0.4)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 10px 25px rgba(201, 160, 99, 0.3)';
                            }}
                        >
                            📖 Посмотреть полное меню
                        </button>
                    </div>
                </div>
            </section>

            {/* Контакты */}
            <section style={{
                background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                padding: '120px 40px',
                color: 'white',
                position: 'relative'
            }}>
                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <div>
                        <h2 style={{
                            fontSize: '3.5rem',
                            marginBottom: '20px',
                            fontWeight: '800'
                        }}>Свяжитесь с нами</h2>
                        <div style={{
                            width: '80px',
                            height: '4px',
                            background: 'white',
                            margin: '0 auto 30px auto',
                            borderRadius: '2px'
                        }}></div>
                        <p style={{
                            fontSize: '1.3rem',
                            marginBottom: '80px',
                            opacity: 0.95,
                            maxWidth: '600px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            lineHeight: '1.8'
                        }}>
                            Ждем вас в ресторане SAVVA для незабываемого гастрономического опыта
                        </p>
                    </div>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '50px',
                        marginBottom: '60px'
                    }}>
                        {[
                            { icon: '📍', title: 'Адрес', content: 'ул. Тверская, 15\nМосква, 125009\nМетро Тверская' },
                            { icon: '📞', title: 'Телефон', content: '+7 (495) 123-45-67\nЕжедневно с 12:00 до 23:00\nБронирование столиков' },
                            { icon: '✉️', title: 'Email', content: 'info@savva-restaurant.ru\nbooking@savva-restaurant.ru\nДля бронирования' }
                        ].map((contact, index) => (
                            <div key={index} style={{
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '25px',
                                padding: '40px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}>
                                <div style={{
                                    fontSize: '3rem',
                                    marginBottom: '20px'
                                }}>{contact.icon}</div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '15px',
                                    fontWeight: '700'
                                }}>{contact.title}</h3>
                                <p style={{
                                    opacity: 0.95,
                                    lineHeight: '1.8',
                                    fontSize: '1.1rem'
                                }}>
                                    {contact.content.split('\n').map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            {i < contact.content.split('\n').length - 1 && <br />}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        flexWrap: 'wrap'
                    }}>
                        <Link to="/booking" style={{textDecoration: 'none'}}>
                            <button style={{
                                background: 'white',
                                color: '#c9a063',
                                border: 'none',
                                padding: '18px 36px',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                🍽️ Забронировать стол
                            </button>
                        </Link>
                        <Link to="/order" style={{textDecoration: 'none'}}>
                            <button style={{
                                background: 'transparent',
                                color: 'white',
                                border: '2px solid white',
                                padding: '16px 34px',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                📱 Заказать онлайн
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* Модальное окно с полным меню */}
            <FullMenuModal 
                isOpen={isMenuModalOpen} 
                onClose={() => setIsMenuModalOpen(false)} 
            />
        </div>
    );
}

export default Header;