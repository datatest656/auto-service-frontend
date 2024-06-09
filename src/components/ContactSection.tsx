// src/components/ContactSection.tsx

import React, { useEffect } from 'react';
import './ContactSection.css';
import AOS from 'aos';

const ContactSection: React.FC = () => {

    useEffect(() => {
        // Инициализация карты Яндекс
        const ymaps = (window as any).ymaps;
        ymaps.ready(() => {
            if (document.getElementById('map')?.childElementCount === 0) {
                const map = new ymaps.Map("map", {
                    center: [42.876, 74.586], // Новые координаты центра карты (Бишкек)
                    zoom: 14,
                    controls: ['zoomControl', 'searchControl']
                });

                const placemark = new ymaps.Placemark([42.876, 74.586], {
                    balloonContent: 'Мы здесь'
                });

                map.geoObjects.add(placemark);
            }
        });

        // Инициализация AOS
        AOS.init();
    }, []);

    return (
        <div id="contact" className="contact-section" data-aos="fade-up">
            <div className="contact-info">
                <div className="contact-details" data-aos="fade-up" data-aos-delay="200">
                    <div className="contact-item">
                        <h3>ЗВОНИТЕ НАМ</h3>
                        <p>+996 555‒54‒13‒91</p>
                    </div>
                    <div className="contact-item">
                        <h3>НАШ EMAIL</h3>
                        <p>mail@tulpar.ru</p>
                    </div>
                    <div className="contact-item">
                        <h3>НАШ АДРЕС</h3>
                        <p>г. Бишкек, ул. Ибраимова, 88а</p>
                    </div>
                    <div className="contact-item">
                        <h3>ГРАФИК РАБОТЫ</h3>
                        <p>Вт-Вс 07:00-00:00</p>
                    </div>
                </div>
                <div id="map" className="map-container" data-aos="zoom-in" data-aos-delay="400"></div>
                <div className="copyright" data-aos="fade-up" data-aos-delay="600">
                    <p>Copyright © 2024 Tulpar</p>
                    <p>ИНН 012345678910</p>
                    <p>ОГРНИП 109876543210000</p>
                    <p>Поддержка. <a href="https://megagroup.ru" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>Разработка сайтов в Tulpar</a></p>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
