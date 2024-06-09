// src/App.tsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import NewsPage from "./components/pages/NewsPage"; // Импортируем страницу новостей
import ServiceSection from './components/ServiceSection';
import AboutSection from './components/AboutSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import VideoSection from './components/VideoSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from "./components/ContactSection";
import ModalForm from './components/ModalForm';
import 'aos/dist/aos.css';
import AOS from 'aos';

const App: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

    const openModal = (serviceId: number) => {
        setSelectedServiceId(serviceId);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<NewsPage />} /> {/* Маршрут для страницы новостей */}
                <Route path="/" element={
                    <>
                        <VideoSection openModal={openModal} />
                        <ServiceSection openModal={openModal} />
                        <AboutSection />
                        <HowWeWorkSection openModal={openModal} />
                        <TestimonialsSection />
                        <ContactSection />
                    </>
                } />
            </Routes>
            {isModalOpen && selectedServiceId && (
                <ModalForm
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    serviceId={selectedServiceId}
                />
            )}
        </Router>
    );
}

export default App;
