// src/components/pages/Home.tsx

import React, { useEffect, useState } from 'react';
import VideoSection from "./VideoSection";
import ServiceSection from "./ServiceSection";
import AboutSection from "./AboutSection";
import HowWeWorkSection from "./HowWeWorkSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";

const Home: React.FC = () => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.pathname === '/') {
                setKey((prevKey) => prevKey + 1);
            }
        };

        window.addEventListener('popstate', handleHashChange);

        return () => {
            window.removeEventListener('popstate', handleHashChange);
        };
    }, []);

    return (
        <div key={key}>
            <VideoSection openModal={() => {}} />
            <ServiceSection openModal={() => {}} />
            <AboutSection />
            <HowWeWorkSection openModal={() => {}} />
            <TestimonialsSection />
            <ContactSection />
        </div>
    );
};

export default Home;
