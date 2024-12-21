import React from "react";
import ModalTemplate from "../../../ModalTemplate/ModalTemplate.jsx";
import styles from "./AppealsModal.module.css";

const AppealModal = ({ isOpen, onClose, appeal }) => {
    return (
        <ModalTemplate
            isOpen={isOpen}
            title={`Appeal Details - ${appeal.orderId}`}
            content={
                <div className={styles.modalBody}>
                    {/* Левая панель: информация */}
                    <div className={styles.appealDetails}>
                        <p><strong>Date:</strong> {appeal.date}</p>
                        <p><strong>Order ID:</strong> {appeal.orderId}</p>
                        <p><strong>Game:</strong> {appeal.game}</p>
                        <p><strong>Reason:</strong> {appeal.reason}</p>
                    </div>

                    {/* Правая панель: чат */}
                    <div className={styles.chatSection}>
                        {/* Прокручиваемый блок сообщений */}
                        <div className={styles.chatMessages}>
                            {appeal.chat.map((message, index) => (
                                <div key={index} className={styles.message}>
                                    <span className={styles[message.sender.toLowerCase()]}>
                                        {message.sender}:
                                    </span>{" "}
                                    {message.text}
                                </div>
                            ))}
                        </div>
                        {/* Поле ввода для сообщений */}
                        <div className={styles.chatInput}>
                            <input type="text" placeholder="Write a message..." />
                            <button>&rarr;</button>
                        </div>
                    </div>
                </div>
            }
            actions={null}
            onClose={onClose}
        />
    );
};

export default AppealModal;
