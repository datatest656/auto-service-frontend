// src/components/ServiceSection.tsx

import React from 'react';
import './ServiceSection.css';
import { Service } from './types'; // Предполагается, что у вас есть определение типа Service

interface ServiceSectionProps {
    openModal: (serviceId: number) => void;
}

const ServiceCard: React.FC<{ service: Service, openModal: (serviceId: number) => void }> = ({ service, openModal }) => (
    <div className="service-card">
        <h3 className="service-card-title">{service.name}</h3>
        <p className="service-card-description">
            {service.description.split('\n').map((line, index) => (
                <span key={index}>{line}</span>
            ))}
        </p>
        <div className="service-card-price">от {service.price} сом.</div>
        <button
            className="service-card-button"
            onClick={() => openModal(service.id)}
        >
            Оставить заявку
        </button>
    </div>
);

const ServiceSection: React.FC<ServiceSectionProps> = ({ openModal }) => {
    const [services, setServices] = React.useState<Service[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        fetch('http://51.20.253.114:80/api/services')
            .then(response => response.json())
            .then(data => {
                setServices(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setError('Ошибка при загрузке услуг');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section id="services" className="service-section">
            <h2 className="service-section-title">Наши Услуги</h2>
            <div className="service-cards-container">
                {services.map(service => (
                    <ServiceCard key={service.id} service={service} openModal={openModal}/>
                ))}
            </div>
        </section>
    );
};

export default ServiceSection;
