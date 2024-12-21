import React from "react";
import ModalTemplate from "../../../ModalTemplate/ModalTemplate.jsx";
import styles from "./WorkingAppealsModal.module.css";

const AppealModal = ({ isOpen, onClose, appeal }) => {
    return (
        <ModalTemplate
            isOpen={isOpen}
            title="Appeal Details"
            content={
                <div className={styles.modalBody}>
                    {/* Секция информации */}
                    <div className={styles.infoSection}>
                        <p><strong>Appeal ID:</strong> #{appeal.id}</p>
                        <p><strong>Nickname:</strong> {appeal.nickname}</p>
                        <p><strong>Platform:</strong> {appeal.platform}</p>
                        <p><strong>Service:</strong> {appeal.service}</p>
                        {/* Кнопки внизу секции Information */}
                        <div className={styles.infoActions}>
                            <button className={styles.approveBtn}>Approve</button>
                            <button className={styles.denyBtn}>Deny</button>
                        </div>
                    </div>

                    {/* Секция сообщений */}
                    <div className={styles.messageSection}>
                        <h3>Working Appeal Message</h3>
                        <textarea
                            placeholder="Write your message here..."
                            className={styles.messageInput}
                        ></textarea>
                    </div>
                </div>
            }
            actions={null} // Кнопки внутри секции
            onClose={onClose}
        />
    );
};

export default AppealModal;
