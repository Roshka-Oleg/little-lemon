import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { path: "/", label: "Главная" },
        { path: "/booking", label: "Бронирование" },
        { path: "/order", label: "Онлайн-заказ" },
        { path: "/map", label: "Контакты" }
    ];

    return (
        <nav style={{
            background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#fff',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            borderBottom: '1.5px solid #c9a063',
            padding: '0',
            marginBottom: 0,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: isScrolled ? '0 4px 20px rgba(201, 160, 99, 0.1)' : 'none'
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '70px'
            }}>
                {/* Логотип */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        animation: 'pulse 2s ease-in-out infinite'
                    }}>
                        S
                    </div>
                    <span style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#1a1a1a',
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #c9a063 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        SAVVA
                    </span>
                </div>

                {/* Навигационные ссылки */}
                <ul style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '40px',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                }}>
                    {navItems.map((item, index) => (
                        <li key={item.path} style={{
                            position: 'relative'
                        }}>
                            <Link 
                                to={item.path} 
                                style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    color: location.pathname === item.path ? '#c9a063' : '#1a1a1a',
                                    textDecoration: 'none',
                                    padding: '12px 20px',
                                    borderRadius: '25px',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.background = location.pathname === item.path 
                                        ? 'rgba(201, 160, 99, 0.1)' 
                                        : 'rgba(201, 160, 99, 0.05)';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = location.pathname === item.path 
                                        ? 'rgba(201, 160, 99, 0.1)' 
                                        : 'transparent';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                {item.label}
                                {location.pathname === item.path && (
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '20px',
                                        height: '3px',
                                        background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
                                        borderRadius: '2px',
                                        animation: 'expandWidth 0.3s ease-out'
                                    }}></div>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Мобильное меню */}
                <div style={{
                    display: 'none',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    padding: '10px'
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                    <div style={{
                        width: '25px',
                        height: '3px',
                        background: '#1a1a1a',
                        margin: '3px 0',
                        borderRadius: '2px',
                        transition: 'all 0.3s ease',
                        transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                    }}></div>
                    <div style={{
                        width: '25px',
                        height: '3px',
                        background: '#1a1a1a',
                        margin: '3px 0',
                        borderRadius: '2px',
                        transition: 'all 0.3s ease',
                        opacity: isMenuOpen ? 0 : 1
                    }}></div>
                    <div style={{
                        width: '25px',
                        height: '3px',
                        background: '#1a1a1a',
                        margin: '3px 0',
                        borderRadius: '2px',
                        transition: 'all 0.3s ease',
                        transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
                    }}></div>
                </div>
            </div>

            {/* Мобильное меню выпадающее */}
            {isMenuOpen && (
                <div style={{
                    background: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(10px)',
                    borderTop: '1px solid rgba(201, 160, 99, 0.2)',
                    padding: '20px 40px',
                    animation: 'slideInFromTop 0.3s ease-out'
                }}>
                    <ul style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px'
                    }}>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link 
                                    to={item.path} 
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: location.pathname === item.path ? '#c9a063' : '#1a1a1a',
                                        textDecoration: 'none',
                                        padding: '15px 20px',
                                        borderRadius: '15px',
                                        display: 'block',
                                        transition: 'all 0.3s ease',
                                        background: location.pathname === item.path ? 'rgba(201, 160, 99, 0.1)' : 'transparent'
                                    }}
                                    onClick={() => setIsMenuOpen(false)}
                                    onMouseOver={(e) => {
                                        e.target.style.background = 'rgba(201, 160, 99, 0.05)';
                                        e.target.style.transform = 'translateX(10px)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.background = location.pathname === item.path ? 'rgba(201, 160, 99, 0.1)' : 'transparent';
                                        e.target.style.transform = 'translateX(0)';
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                
                @keyframes expandWidth {
                    from { width: 0; }
                    to { width: 20px; }
                }
                
                @keyframes slideInFromTop {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu {
                        display: flex;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Nav;