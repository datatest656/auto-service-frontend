// src/components/NewsList.tsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NewsList.css';

interface News {
    id: number;
    title: string;
    created_at: string;
    content: string;
}

const NewsList: React.FC = () => {
    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/news')
            .then(response => response.json())
            .then(data => setNews(data.data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div className="news-list">
            <h1>Новости</h1>
            {news.length > 0 ? (
                news.map(newsItem => (
                    <div key={newsItem.id} className="news-item">
                        <Link to={`/news/${newsItem.id}`}>
                            <h2>{newsItem.title}</h2>
                            <p>{new Date(newsItem.created_at).toLocaleDateString()}</p>
                            <p>{newsItem.content.slice(0, 100)}...</p>
                        </Link>
                    </div>
                ))
            ) : (
                <p>Загрузка новостей...</p>
            )}
        </div>
    );
};

export default NewsList;
