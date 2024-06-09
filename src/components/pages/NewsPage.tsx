// src/components/pages/NewsPage.tsx

import React, { useEffect, useState } from 'react';
import './NewsPage.css';
import ContactSection from '../ContactSection'; // Добавьте этот импорт

const newsData = [
    {
        id: 1,
        title: 'Зачем делать регулярную диагностику ходовой части',
        content: 'Диагностика ходовой части автомобиля должна проводиться систематически...',
        imageUrl: 'https://i.postimg.cc/4NkGf4gX/diagnostika-avto.webp'
    },
    {
        id: 2,
        title: 'Новый сервис: замена масла',
        content: 'Теперь мы предлагаем услугу по замене масла. Обслуживание вашего автомобиля...',
        imageUrl: 'https://i.postimg.cc/wxJKGKsZ/zamena-masla-akpp-1024x484.jpg'
    },
    {
        id: 3,
        title: 'Скидка 20% на ремонт в июне',
        content: 'Только в этом месяце успейте заказать ремонт со скидкой 20%! Подробности...',
        imageUrl: 'https://i.postimg.cc/xTyw9K5P/3040680-w600-h600-3040680.webp'
    }
];

const NewsPage: React.FC = () => {
    const [apiNews, setApiNews] = useState(newsData);

    useEffect(() => {
        fetch('http://localhost:8080/api/news')
            .then(response => response.json())
            .then(data => {
                // Объединяем статические новости с новостями из API
                const combinedNews = [...newsData, ...data.data];
                setApiNews(combinedNews);
            })
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div className="news-page">
            <h1>Новости</h1>
            {apiNews.map(newsItem => (
                <div key={newsItem.id} className="news-item">
                    {newsItem.imageUrl && (
                        <img src={newsItem.imageUrl} alt="News" className="news-image" />
                    )}
                    <div className="news-content">
                        <h2>{newsItem.title}</h2>
                        <p>{newsItem.content}</p>
                        <button className="more-button">Подробнее</button>
                    </div>
                </div>
            ))}
            {/* Добавьте компонент ContactSection */}
            <ContactSection />
        </div>
    );
};

export default NewsPage;
