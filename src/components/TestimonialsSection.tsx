// src/components/TestimonialsSection.tsx

import React, { useState } from 'react';
import './TestimonialsSection.css';

const testimonials = [
    {
        name: "Анна Бородина",
        feedback: "Я довольна работой автосервиса. Они провели быстрый и качественный ремонт моего автомобиля, исправив все проблемы. Техники были очень профессиональными и дружелюбными, они дали мне подробные отчеты и рекомендации по уходу за моим автомобилем. Цены на услуги вполне доступные, а уровень обслуживания высокий. Я уверена, что я обращусь в этот автосервис еще раз и рекомендую его всем моим друзьям и знакомым.",
        image: "https://i.postimg.cc/tJqJLnLB/image.jpg"
    },
    {
        name: "Антон Гарапов",
        feedback: "Я очень доволен услугами автосервиса. Ремонт моего автомобиля был выполнен качественно и в срок. Механики профессионально подошли к делу, объяснили все детали и дали хорошие советы. Цена услуг адекватная, я рекомендую этот автосервис своим друзьям и знакомым. Спасибо за качественный сервис!",
        image: "https://i.postimg.cc/XYRJnzRG/pleased-male-customer-guarantee-quality-show-okay-sign-176420-18709.avif"
    },
    {
        name: "Хьюга Хината",
        feedback: "Я довольна работой автосервиса. Они провели быстрый и качественный ремонт моего автомобиля, исправив все проблемы. Техники были очень профессиональными и дружелюбными, они дали мне подробные отчеты и рекомендации по уходу за моим автомобилем. Цены на услуги вполне доступные, а уровень обслуживания высокий. Я уверена, что я обращусь в этот автосервис еще раз и рекомендую его всем моим друзьям и знакомым.",
        image: "https://i.postimg.cc/W32s3LX3/images.jpg"
    },
    // Добавьте больше отзывов, если нужно
];

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials-section">
            <h2>Отзывы наших клиентов</h2>
            <div className="testimonial">
                <button className="testimonial-button" onClick={prevTestimonial}>❮</button>
                <div className="testimonial-content">
                    <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="testimonial-image" />
                    <h3>{testimonials[currentIndex].name}</h3>
                    <p>{testimonials[currentIndex].feedback}</p>
                </div>
                <button className="testimonial-button" onClick={nextTestimonial}>❯</button>
            </div>
        </section>
    );
};

export default TestimonialsSection;
