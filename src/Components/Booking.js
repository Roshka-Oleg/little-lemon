import React from "react";
import BookingForm from "./BookingForm";
import { useState } from "react";

const Booking = (props) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        // Возвращаемся на главную страницу
        window.history.back();
    };

    const handleSubmit = (formData) => {
        props.submitForm(formData);
        setIsOpen(false);
    };

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
                maxWidth: '90vw',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
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
                
                <BookingForm 
                    generateTimes={props.generateTimes} 
                    submitForm={handleSubmit}
                />
            </div>
        </div>
    );
};

export default Booking;