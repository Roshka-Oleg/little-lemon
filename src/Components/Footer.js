import React, { useState, useEffect } from "react";

const Footer = () => {
    const [currentYear] = useState(new Date().getFullYear());
    const [isVisible, setIsVisible] = useState(false);
    const [subEmail, setSubEmail] = useState("");
    const [subSuccess, setSubSuccess] = useState(false);
    const [subError, setSubError] = useState("");
    const [fbName, setFbName] = useState("");
    const [fbEmail, setFbEmail] = useState("");
    const [fbMsg, setFbMsg] = useState("");
    const [fbSuccess, setFbSuccess] = useState(false);
    const [fbError, setFbError] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Email subscribe
    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubSuccess(false);
        setSubError("");
        if (!subEmail.match(/^\S+@\S+\.\S+$/)) {
            setSubError("Введите корректный email");
            return;
        }
        setSubSuccess(true);
        setSubEmail("");
    };

    // Feedback form
    const handleFeedback = (e) => {
        e.preventDefault();
        setFbSuccess(false);
        setFbError("");
        if (!fbName.trim() || !fbEmail.match(/^\S+@\S+\.\S+$/) || !fbMsg.trim()) {
            setFbError("Пожалуйста, заполните все поля корректно");
            return;
        }
        setFbSuccess(true);
        setFbName(""); setFbEmail(""); setFbMsg("");
    };

    return (
        <footer style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
            color: 'white',
            padding: '80px 40px 40px 40px',
            marginTop: 0,
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Декоративные элементы */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(201, 160, 99, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '5%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(201, 160, 99, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite reverse'
            }}></div>

            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Основной контент футера */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '60px',
                    marginBottom: '60px',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s ease-out'
                }}>
                    {/* Логотип и описание + соцсети */}
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            marginBottom: '25px'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                animation: 'pulse 2s ease-in-out infinite'
                            }}>S</div>
                            <span style={{
                                fontSize: '2rem',
                                fontWeight: '800',
                                background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>SAVVA</span>
                        </div>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            color: '#ccc',
                            marginBottom: '25px'
                        }}>
                            Ресторан высокой кухни в самом сердце Москвы. 
                            Мы создаем незабываемые гастрономические впечатления, 
                            сочетая традиции с инновациями.
                        </p>
                        {/* Соцсети */}
                        <div style={{display: 'flex', gap: '18px', marginTop: 18}}>
                            <a href="https://t.me/savva_restaurant" target="_blank" rel="noopener noreferrer" style={{color: '#c9a063', fontSize: 28, transition: 'color 0.3s'}} title="Telegram" onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#c9a063'}> <i className="fa-brands fa-telegram"></i> </a>
                            <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer" style={{color: '#c9a063', fontSize: 28, transition: 'color 0.3s'}} title="WhatsApp" onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#c9a063'}> <i className="fa-brands fa-whatsapp"></i> </a>
                            <a href="https://instagram.com/savva_restaurant" target="_blank" rel="noopener noreferrer" style={{color: '#c9a063', fontSize: 28, transition: 'color 0.3s'}} title="Instagram" onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#c9a063'}> <i className="fa-brands fa-instagram"></i> </a>
                            <a href="https://vk.com/savva_restaurant" target="_blank" rel="noopener noreferrer" style={{color: '#c9a063', fontSize: 28, transition: 'color 0.3s'}} title="VK" onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#c9a063'}> <i className="fa-brands fa-vk"></i> </a>
                        </div>
                    </div>

                    {/* Форма подписки */}
                    <div>
                        <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '25px', color: '#c9a063'}}>Подписка на новости</h3>
                        <form onSubmit={handleSubscribe} style={{display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: 320}}>
                            <input type="email" placeholder="Ваш email" value={subEmail} onChange={e=>setSubEmail(e.target.value)} style={{padding: '14px', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: '1rem', outline: 'none'}}/>
                            <button type="submit" style={{background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)', color: 'white', border: 'none', borderRadius: 8, padding: '14px', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s', letterSpacing: '1px'}}>Подписаться</button>
                            {subSuccess && <div style={{color: '#c9a063', fontSize: '1rem'}}>Спасибо за подписку!</div>}
                            {subError && <div style={{color: '#ff6584', fontSize: '1rem'}}>{subError}</div>}
                        </form>
                    </div>

                    {/* Форма обратной связи */}
                    <div>
                        <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '25px', color: '#c9a063'}}>Обратная связь</h3>
                        <form onSubmit={handleFeedback} style={{display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 340}}>
                            <input type="text" placeholder="Ваше имя" value={fbName} onChange={e=>setFbName(e.target.value)} style={{padding: '12px', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: '1rem', outline: 'none'}}/>
                            <input type="email" placeholder="Email" value={fbEmail} onChange={e=>setFbEmail(e.target.value)} style={{padding: '12px', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: '1rem', outline: 'none'}}/>
                            <textarea placeholder="Сообщение" value={fbMsg} onChange={e=>setFbMsg(e.target.value)} style={{padding: '12px', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: '1rem', outline: 'none', minHeight: 70}}/>
                            <button type="submit" style={{background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)', color: 'white', border: 'none', borderRadius: 8, padding: '14px', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s', letterSpacing: '1px'}}>Отправить</button>
                            {fbSuccess && <div style={{color: '#c9a063', fontSize: '1rem'}}>Спасибо за сообщение!</div>}
                            {fbError && <div style={{color: '#ff6584', fontSize: '1rem'}}>{fbError}</div>}
                        </form>
                    </div>

                    {/* Карта */}
                    <div>
                        <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '25px', color: '#c9a063'}}>Мы на карте</h3>
                        <div style={{borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(201,160,99,0.15)', border: '2px solid #c9a063', width: '100%', minHeight: 220, maxWidth: 400}}>
                            <iframe
                                title="SAVVA Location"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=37.6105%2C55.7575%2C37.6175%2C55.7615&amp;layer=mapnik&amp;marker=55.7595%2C37.6140"
                                style={{width: '100%', height: 220, border: 0}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div style={{fontSize: '0.95rem', color: '#ccc', marginTop: 8}}>ул. Тверская, 15, Москва</div>
                    </div>
                </div>

                {/* Разделитель */}
                <div style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(201, 160, 99, 0.3), transparent)',
                    margin: '40px 0',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.8s ease-out 0.4s'
                }}></div>

                {/* Нижняя часть футера */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.8s ease-out 0.6s'
                }}>
                    <div style={{
                        color: '#888',
                        fontSize: '0.95rem'
                    }}>
                        © {currentYear} SAVVA Restaurant. Все права защищены.
                    </div>
                    
                    <div style={{
                        display: 'flex',
                        gap: '30px',
                        flexWrap: 'wrap'
                    }}>
                        <span style={{
                            color: '#888',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.color = '#c9a063'}
                        onMouseOut={(e) => e.target.style.color = '#888'}>
                            Политика конфиденциальности
                        </span>
                        <span style={{
                            color: '#888',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.color = '#c9a063'}
                        onMouseOut={(e) => e.target.style.color = '#888'}>
                            Условия использования
                        </span>
                        <span style={{
                            color: '#888',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.color = '#c9a063'}
                        onMouseOut={(e) => e.target.style.color = '#888'}>
                            Карьера
                        </span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
            `}</style>
        </footer>
    );
};

export default Footer;