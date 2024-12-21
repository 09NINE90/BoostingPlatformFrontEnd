import React, { useState } from 'react';
import ModalTemplate from '../../../ModalTemplate/ModalTemplate.jsx';
import modalStyles from './OrderModal.module.css';

const OrderModal = ({ isOpen, onClose, order }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editField, setEditField] = useState(null);

    const [isSetup, setIsSetup] = useState(false); // Для отслеживания состояния кнопки Setup/Kick
    const [isBoosterModalOpen, setIsBoosterModalOpen] = useState(false); // Для открытия модального окна ввода ID бустера
    const [boosterId, setBoosterId] = useState(''); // Для хранения ID бустера

    // Логика редактирования цены и бонуса
    const handleEditClick = (field) => {
        setEditField(field);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setEditField(null);
    };

    // Логика кнопок Setup/Kick Booster
    const handleSetupClick = () => {
        setIsBoosterModalOpen(true);
    };

    const handleKickClick = () => {
        setBoosterId('');
        setIsSetup(false);
    };

    const handleConfirmSetup = () => {
        if (boosterId.trim() === '') {
            alert('Please enter a valid Booster ID');
            return;
        }
        setIsSetup(true);
        setIsBoosterModalOpen(false);
    };

    const handleBoosterModalClose = () => {
        setIsBoosterModalOpen(false);
    };

    // Логика подтверждения заказа
    const handleConfirmOrder = () => {
        alert('Order confirmed!');
        // Реализация логики подтверждения заказа
    };

    if (!order) return null;

    return (
        <>
            <ModalTemplate
                isOpen={isOpen}
                content={
                    <div className={modalStyles.modalContent}>
                        <div className={modalStyles.modalBody}>
                            <div className={modalStyles.orderInfo}>
                                <h3>Order Information</h3>
                                <p><strong>Game:</strong> {order.game}</p>
                                <p><strong>Platform:</strong> {order.platform}</p>
                                <p><strong>Services:</strong> {order.services}</p>
                                <p><strong>Status:</strong> {order.status}</p>
                                <p><strong>Estimate Date:</strong> {order.estimateDate}</p>
                                <p><strong>Timezone:</strong> {order.timezone}</p>
                                <p><strong>VPN:</strong> {order.vpn}</p>

                                <div className={modalStyles.actionButtons}>
                                    <button
                                        className={modalStyles.setupBtn}
                                        onClick={isSetup ? handleKickClick : handleSetupClick}
                                    >
                                        {isSetup ? 'Kick Booster' : 'Setup Booster'}
                                    </button>
                                    <button
                                        className={modalStyles.completeBtn}
                                        onClick={handleConfirmOrder}
                                    >
                                        Confirm Order
                                    </button>
                                </div>
                            </div>

                            <div className={modalStyles.chatSection}>
                                <div className={modalStyles.chatMessages}>
                                    {order.chat.map((message, index) => (
                                        <div key={index} className={modalStyles.message}>
                                            <p><strong>{message.sender}:</strong> {message.text}</p>
                                            <span className={modalStyles.timestamp}>{message.timestamp}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className={modalStyles.chatInput}>
                                    <input type="text" placeholder="Write a message..." />
                                    <button>&rarr;</button>
                                </div>
                            </div>

                            <div className={modalStyles.additionalInfo}>
                                <h3>Additional Information</h3>
                                <p>
                                    <strong>Price:</strong> ${order.price}
                                    <button
                                        className={modalStyles.gearButton}
                                        onClick={() => handleEditClick('price')}
                                    >
                                        ⚙️
                                    </button>
                                </p>
                                <p>
                                    <strong>Your Bonus:</strong> +${order.bonus}
                                    <button
                                        className={modalStyles.gearButton}
                                        onClick={() => handleEditClick('bonus')}
                                    >
                                        ⚙️
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                }
                actions={null}
                onClose={onClose}
            />

            {isEditModalOpen && (
                <ModalTemplate
                    isOpen={isEditModalOpen}
                    title={`Edit ${editField === 'price' ? 'Price' : 'Bonus'}`}
                    content={
                        <div  className={modalStyles.boosterInputContainer}>
                            <label>
                                {editField === 'price' ? 'Price' : 'Bonus'}:
                                <input type="number" placeholder={`Enter new ${editField}`} />
                            </label>
                        </div>
                    }
                    actions={
                        <div>
                            <button className={modalStyles.saveButton} onClick={closeEditModal}>Save</button>
                        </div>
                    }
                    onClose={closeEditModal}
                />
            )}

            {isBoosterModalOpen && (
                <ModalTemplate
                    isOpen={isBoosterModalOpen}
                    title="Setup Booster"
                    content={
                        <div className={modalStyles.boosterInputContainer}>
                            <label>
                                Enter Booster ID:
                                <input
                                    type="text"
                                    value={boosterId}
                                    onChange={(e) => setBoosterId(e.target.value)}
                                    placeholder="Booster ID"
                                />
                            </label>
                        </div>
                    }
                    actions={
                        <div>
                            <button className={modalStyles.saveButton} onClick={handleConfirmSetup}>Save</button>
                        </div>
                    }
                    onClose={handleBoosterModalClose}
                />
            )}
        </>
    );
};

export default OrderModal;
