// src/components/NewsContactSection.tsx
import React from 'react';
import './NewsContactSection.css';

const NewsContactSection: React.FC = () => {
    return (
        <div className="news-contact-section">
            <div className="contact-details">
                <div className="contact-item">
                    <h3>ЗВОНИТЕ НАМ</h3>
                    <p>+7 (000) 000-00-00</p>
                </div>
                <div className="contact-item">
                    <h3>НАШ EMAIL</h3>
                    <p>mail@company.ru</p>
                </div>
                <div className="contact-item">
                    <h3>НАШ АДРЕС</h3>
                    <p>Город, название улицы, дом</p>
                </div>
                <div className="contact-item">
                    <h3>ГРАФИК РАБОТЫ</h3>
                    <p>Вт-Вс 07:00-00:00</p>
                </div>
            </div>
            <div className="map-container">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A07b792e026232b73b46f352b287823cf333155cecb95f6e10a7a7da89638e6c3&amp;source=constructor"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    title="Яндекс Карты"
                ></iframe>
            </div>
        </div>
    );
};

export default NewsContactSection;
