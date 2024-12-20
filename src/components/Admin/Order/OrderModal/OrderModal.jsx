import React, { useState } from 'react';
import ModalTemplate from '../../../ModalTemplate/ModalTemplate.jsx';
import modalStyles from './OrderModal.module.css';

const OrderModal = ({ isOpen, onClose, order }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editField, setEditField] = useState(null);

    const handleEditClick = (field) => {
        setEditField(field);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setEditField(null);
    };

    if (!order) return null;

    return (
        <>
            <ModalTemplate
                isOpen={isOpen}
                title={`Order #${order.id}`}
                content={
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
                }
                actions={null}
                onClose={onClose}
            />

            {isEditModalOpen && (
                <ModalTemplate
                    isOpen={isEditModalOpen}
                    title={`Edit ${editField === 'price' ? 'Price' : 'Bonus'}`}
                    content={
                        <div>
                            <label>
                                {editField === 'price' ? 'Price' : 'Bonus'}:
                                <input type="number" placeholder={`Enter new ${editField}`} />
                            </label>
                        </div>
                    }
                    actions={
                        <div className={modalStyles.modalActions}>
                            <button onClick={closeEditModal}>Save</button>
                        </div>
                    }
                    onClose={closeEditModal}
                />
            )}
        </>
    );
};

export default OrderModal;
