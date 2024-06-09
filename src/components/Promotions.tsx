// src/components/NewsList.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './NewsList.css';

interface NewsItem {
    id: number;
    title: string;
    content: string;
    created_at: string;
}

const NewsList: React.FC = () => {
    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/news')
            .then(response => {
                setNews(response.data.data);
            })
            .catch(error => {
                console.error("There was an error fetching the news!", error);
            });
    }, []);

    return (
        <div className="news-list">
            <h1>Новости</h1>
            {news.map((item) => (
                <div key={item.id} className="news-item">
                    <h2><Link to={`/news/${item.id}`}>{item.title}</Link></h2>
                    <p>{item.created_at}</p>
                    <p>{item.content.slice(0, 100)}...</p>
                </div>
            ))}
        </div>
    );
}

export default NewsList;
