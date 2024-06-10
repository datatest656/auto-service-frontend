// src/components/ModalForm.tsx

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './ModalForm.css';

Modal.setAppElement('#root');

interface ModalFormProps {
    isOpen: boolean;
    onRequestClose: () => void;
    serviceId: number;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onRequestClose, serviceId }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [agree, setAgree] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setName('');
            setEmail('');
            setPhone('');
            setAgree(false);
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!agree) {
            alert('Необходимо согласиться на обработку данных');
            return;
        }

        const requestBody = {
            name: name,
            email: email,
            phone_number: phone,
            service_id: serviceId,
        };

        try {
            const response = await fetch('http://51.20.253.114:80/api/clients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                alert('Заявка успешно отправлена!');
                onRequestClose(); // Закрыть модальное окно
            } else {
                const errorData = await response.json();
                alert(`Ошибка при отправке заявки: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Ошибка при отправке заявки:', error);
            alert('Ошибка при отправке заявки');
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Оставить заявку"
            className="modal"
            overlayClassName="overlay"
        >
            <button onClick={onRequestClose} className="close-button">×</button>
            <img src="https://i.postimg.cc/Hnjv9vV9/d5.webp" alt="Service" className="modal-image" /> {/* Добавить ваше изображение */}
            <h2>Оставить заявку</h2>
            <p>Введите данные для заказа услуги</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        placeholder="Телефон"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group-checkbox">
                    <input
                        type="checkbox"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        required
                    />
                    <label>Я согласен на обработку моих персональных данных</label>
                </div>
                <button type="submit" className="submit-button">Оставить заявку</button>
            </form>
        </Modal>
    );
};

export default ModalForm;
