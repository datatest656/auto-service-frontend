import React from 'react';
import './Header.css';
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
        e.preventDefault();
        if (window.location.pathname === '/') {
            scrollToSection(sectionId);
        } else {
            navigate('/');
            setTimeout(() => scrollToSection(sectionId), 100); // Scroll after navigation to home
        }
    };

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (window.location.pathname === '/') {
            window.location.reload();
        } else {
            navigate('/');
        }
    };

    return (
        <div className="header">
            <div className="top-bar">
                <ul className="nav nav-list">
                    <li><a href="/" onClick={handleHomeClick} className="nav-item">Главная</a></li>
                    <li><a href="/" onClick={(e) => handleLinkClick(e, 'services')} className="nav-item">Услуги</a></li>
                    <li><a href="/" onClick={(e) => handleLinkClick(e, 'about')} className="nav-item">О компании</a></li>
                    <li><Link to="/news" className="nav-item">Новости</Link></li> {/* Ссылка на страницу новостей */}
                    <li><a href="/" onClick={(e) => handleLinkClick(e, 'contact')} className="nav-item">Контакты</a></li>
                </ul>
            </div>
            <div className="company-info">
                <div className="company-name">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} className="logo" alt="Company Logo" />
                    <h1>Tulpar</h1>
                </div>
                <div className="contact-info">
                    <span><FaMapMarkerAlt className="contact-icon" /> г. Бишкек, ул. Ибраимова, 88а</span>
                    <span><FaClock className="contact-icon" /> Ежедневно с 08:00 до 18:00</span>
                    <span><FaPhone className="contact-icon" /> +996 555‒54‒13‒91</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
