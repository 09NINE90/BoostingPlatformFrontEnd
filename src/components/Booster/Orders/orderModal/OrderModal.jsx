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
        setIsSessionActive(true); // Меняем на Finish Session
    };

    const handleApplyFinishSession = () => {
        setIsFinishModalOpen(false);
        setIsSessionActive(false); // Меняем обратно на Start Session
    };

    const handleFinishOrder = () => {
        setIsFinishOrderModalOpen(true);
    };

    const handleConfirmFinishOrder = () => {
        setIsFinishOrderModalOpen(false);
        setIsButtonsDisabled(true); // Блокируем все кнопки
        order.status = "Done"; // Обновляем статус заказа
    };

    const modalContent = (
        <div className={styles.modalBody}>
            <div className={styles.orderInfo}>
                <h3>Order Information</h3>
                <p>Order ID: <span>{order.id}</span></p>
                <p>Game: <span>{order.game}</span></p>
                <p>Platform: <span>{order.platform}</span></p>
                <p>Service: <span>{order.service}</span></p>
                <p>Status: <span className={styles.status}>{order.status}</span></p>
                <p>Estimate date: <span>{order.estimateDate}</span></p>
                <div className={styles.orderActions}>
                    {/* Логика для Start/Finish Session */}
                    <button
                        className={isSessionActive ? styles.finishSessionBtn : styles.startSessionBtn}
                        onClick={isSessionActive ? handleFinishSession : handleStartSession}
                        disabled={isButtonsDisabled}
                    >
                        {isSessionActive ? "Finish Session" : "Start Session"}
                    </button>
                    {/* Кнопка Finish Order */}
                    <button
                        className={styles.finishOrderBtn}
                        onClick={handleFinishOrder}
                        disabled={isButtonsDisabled}
                    >
                        Finish Order
                    </button>
                </div>
            </div>
            <div className={styles.chatBox}>
                <h3>Chat</h3>
                <div className={styles.chatMessages}>
                    <p className={styles.message}>Hey! <span className={styles.time}>12:45 PM</span></p>
                </div>
                <div className={styles.chatInput}>
                    <input type="text" placeholder="Write a message..." />
                    <button>&rarr;</button>
                </div>
            </div>
            <div className={styles.additionalInfo}>
                <h3>Additional Information</h3>
                <p>Price: <span>${order.price}</span></p>
                <p>Orders done for week: <span>7</span></p>
                <p>Your bonus: <span>+125</span></p>
            </div>
        </div>
    );

    return (
        <>
            <ModalTemplate
                isOpen={isOpen}
                title="Order Details"
                content={modalContent}
                onClose={onClose}
            />
            <ModalTemplate
                isOpen={isSessionModalOpen}
                title="Start Session"
                content={
                    <div className={styles.sessionModalContent}>
                        <label>Twitch URL:</label>
                        <input type="text" placeholder="Enter Twitch URL" />
                        <label>Work Time:</label>
                        <input type="text" placeholder="Enter Work Time" />
                    </div>
                }
                actions={
                    <button className={styles.applyBtn} onClick={handleApplyStartSession}>
                        Apply
                    </button>
                }
                onClose={() => setIsSessionModalOpen(false)}
            />
            <ModalTemplate
                isOpen={isFinishModalOpen}
                title="Finish Session"
                content={
                    <div className={styles.finishModalContent}>
                        <label>Imgur URL:</label>
                        <input type="text" placeholder="Enter Imgur URL" />
                        <label>Description:</label>
                        <textarea placeholder="Enter Description"></textarea>
                    </div>
                }
                actions={
                    <button className={styles.applyBtn} onClick={handleApplyFinishSession}>
                        Apply
                    </button>
                }
                onClose={() => setIsFinishModalOpen(false)}
            />
            <ModalTemplate
                isOpen={isFinishOrderModalOpen}
                title="Finish Order Confirmation"
                content={<p>Are you sure you want to finish the order?</p>}
                actions={
                    <div className={styles.confirmActions}>
                        <button
                            className={styles.confirmBtn}
                            onClick={handleConfirmFinishOrder}
                        >
                            Confirm
                        </button>
                        <button
                            className={styles.cancelBtn}
                            onClick={() => setIsFinishOrderModalOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                }
                onClose={() => setIsFinishOrderModalOpen(false)}
            />
        </>
    );
};

export default OrderModal;
