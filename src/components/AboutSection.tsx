// src/components/AboutSection.tsx

import React, { useEffect, useState } from 'react';
import './AboutSection.css';

interface Employee {
    id: number;
    name: string;
    phone_number: string;
    email: string;
    role: string;
    photo_url: string;
}

const AboutSection: React.FC = () => {
    const [employee, setEmployee] = useState<Employee | null>(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/home')
            .then(response => response.json())
            .then(data => setEmployee(data.data[0])) // Предполагается, что первый объект - это нужный сотрудник
            .catch(error => console.error('Ошибка при загрузке данных о сотруднике:', error));
    }, []);

    return (
        <section id="about" className="about-section" data-aos="fade-right">
            <div className="about-content">
                <h2>О компании</h2>
                <p>
                    Мы способны удовлетворить запросы самого требовательного потребителя, ведь все предлагаемые товары имеют европейское качество, а широкий ассортимент продукции не оставит равнодушным никого. Делая ставку на надежность и качество, наши цены остаются на приятно низком уровне. Вся продукция сертифицирована и отвечает требованиям безопасности/соответствует стандартам качества/ГОСТам.
                </p>
            </div>
            {employee && (
                <div className="employee-profile">
                    <img src={employee.photo_url} alt={employee.name} className="employee-photo" />
                    <div className="employee-info">
                        <h3>{employee.name}</h3>
                        <p>{employee.role}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutSection;
