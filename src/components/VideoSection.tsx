// src/components/VideoSection.tsx
import React from 'react';
import './VideoSection.css';

interface VideoSectionProps {
    openModal: (serviceId: number) => void;
}

const VideoSection: React.FC<VideoSectionProps> = ({ openModal }) => {
    const serviceId = 1; // Замените на актуальный идентификатор услуги, если нужно

    return (
        <section className="video-section">
            <div className="video-overlay"></div>
            <video className="background-video" autoPlay loop muted>
                <source src={`${process.env.PUBLIC_URL}/vid.mp4`} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="video-content">
                <h1>Ремонт автомобилей любой сложности</h1>
                <p>Только в этом месяце успейте заказать ремонт со скидкой 20%!</p>
                <button className="cta-button" onClick={() => openModal(serviceId)}>Оставить заявку</button>
            </div>
        </section>
    );
};

export default VideoSection;
