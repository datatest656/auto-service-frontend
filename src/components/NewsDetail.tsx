// src/components/NewsDetail.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './NewsDetail.css';

interface NewsItem {
    id: number;
    title: string;
    content: string;
    created_at: string;
}

const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [newsItem, setNewsItem] = useState<NewsItem | null>(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/news/${id}`)
            .then(response => response.json())
            .then(data => setNewsItem(data))
            .catch(error => console.error('Error fetching news item:', error));
    }, [id]);

    if (!newsItem) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="news-detail">
            <h1>{newsItem.title}</h1>
            <p>{new Date(newsItem.created_at).toLocaleDateString()}</p>
            <div className="content">
                {newsItem.content}
            </div>
        </div>
    );
};

export default NewsDetail;
