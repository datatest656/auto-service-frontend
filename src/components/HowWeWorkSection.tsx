// src/components/HowWeWorkSection.tsx

import React from 'react';
import './HowWeWorkSection.css';

interface HowWeWorkSectionProps {
    openModal: (serviceId: number) => void; // Метод для открытия модального окна
}

const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ openModal }) => {
    return (
        <section className="how-we-work-section" data-aos="fade-right">
            <h2>Как мы работаем</h2>
            <div className="steps-container">
                <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-details">
                        <h3>Звоните или оставляете заявку</h3>
                        <p>Менеджер запишет на диагностику в удобное для Вас время.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-details">
                        <h3>Приезжаете в автосервис</h3>
                        <p>Наши специалисты проводят диагностику неисправностей.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-details">
                        <h3>Приступаем к работе</h3>
                        <p>Наши мастера проводят работы согласно заказ-наряду.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-details">
                        <h3>Производите оплату</h3>
                        <p>Менеджер показывает результат и передает Вам ключи.</p>
                    </div>
                </div>
            </div>
            <button
                className="submit-button"
                onClick={() => openModal(1)} // Пример использования serviceId = 1
            >
                Оставить заявку
            </button>
        </section>
    );
};

export default HowWeWorkSection;
