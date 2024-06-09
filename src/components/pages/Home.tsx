// src/components/pages/Home.tsx

import React from 'react';
import VideoSection from '../VideoSection';

interface HomeProps {
    openModal: (serviceId: number) => void;
}

const Home: React.FC<HomeProps> = ({ openModal }) => {
    return (
        <div>
            <VideoSection openModal={openModal} />
            {/* Здесь могут быть другие компоненты для главной страницы */}
        </div>
    );
}

export default Home;
