import React from 'react';
import { Service } from './types'; // Предполагается, что у вас есть определение типа Service
import './ServiceCard.css';

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
    <div className="service-card" data-aos="fade-right">
        <h3 className="service-card-title">{service.name}</h3>
        <p className="service-card-description">
            {service.description.split('\n').map((line, index) => (
                <span key={index}>{line}</span>
            ))}
        </p>
        <div className="service-card-price">от {service.price} руб.</div>
        <button className="service-card-button">Оставить заявку</button>
    </div>
);

export default ServiceCard;
