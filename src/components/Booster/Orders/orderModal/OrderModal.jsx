import React, { useState } from "react";
import ModalTemplate from "../../../ModalTemplate/ModalTemplate.jsx";
import styles from "./OrderModal.module.css";

const OrderModal = ({ isOpen, onClose, order }) => {
    const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);
    const [isFinishModalOpen, setIsFinishModalOpen] = useState(false);
    const [isFinishOrderModalOpen, setIsFinishOrderModalOpen] = useState(false);
    const [isSessionActive, setIsSessionActive] = useState(false);
    const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);

    const handleStartSession = () => {
        setIsSessionModalOpen(true);
    };

    const handleFinishSession = () => {
        setIsFinishModalOpen(true);
    };

    const handleApplyStartSession = () => {
        setIsSessionModalOpen(false);
        setIsSessionActive(true);
    };

    const handleApplyFinishSession = () => {
        setIsFinishModalOpen(false);
        setIsSessionActive(false);
    };

    const handleFinishOrder = () => {
        setIsFinishOrderModalOpen(true);
    };

    const handleConfirmFinishOrder = () => {
        setIsFinishOrderModalOpen(false);
        setIsButtonsDisabled(true);
        order.status = "Done";
    };

    return (
        <ModalTemplate
            isOpen={isOpen}
            title="Order Details"
            content={
                <div className={styles.modalContent}>
                    <div className={styles.modalBody}>
                        {/* Секция информации о заказе */}
                        <div className={styles.orderInfo}>
                            <h3>Order Information</h3>
                            <p>Order ID: <span>{order.id}</span></p>
                            <p>Game: <span>{order.game}</span></p>
                            <p>Platform: <span>{order.platform}</span></p>
                            <p>Service: <span>{order.service}</span></p>
                            <p>Status: <span className={styles.status}>{order.status}</span></p>
                            <p>Estimate date: <span>{order.estimateDate}</span></p>
                            <div className={styles.orderActions}>
                                <button
                                    className={isSessionActive ? styles.finishSessionBtn : styles.startSessionBtn}
                                    onClick={isSessionActive ? handleFinishSession : handleStartSession}
                                    disabled={isButtonsDisabled}
                                >
                                    {isSessionActive ? "Finish Session" : "Start Session"}
                                </button>
                                <button
                                    className={styles.finishOrderBtn}
                                    onClick={handleFinishOrder}
                                    disabled={isButtonsDisabled}
                                >
                                    Finish Order
                                </button>
                            </div>
                        </div>

                        {/* Секция чата */}
                        <div className={styles.chatBox}>
                            <div className={styles.chatMessages}>
                                <p className={styles.message}>Hey! <span className={styles.time}>12:45 PM</span></p>
                                <p className={styles.message}>How can I help you? <span
                                    className={styles.time}>12:46 PM</span></p>
                            </div>
                            <div className={styles.chatInput}>
                                <input type="text" placeholder="Write a message..."/>
                                <button>&rarr;</button>
                            </div>
                        </div>

                        {/* Секция дополнительной информации */}
                        <div className={styles.additionalInfo}>
                            <h3>Additional Information</h3>
                            <p>Price: <span>${order.price}</span></p>
                            <p>Orders done for week: <span>7</span></p>
                            <p>Your bonus: <span>+125</span></p>
                        </div>
                    </div>
                </div>

            }
            onClose={onClose}
        />
    );
};

export default OrderModal;
