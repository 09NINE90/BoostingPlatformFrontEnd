import React from "react";
import ModalTemplate from "../../ModalTemplate/ModalTemplate"; // Используем общий шаблон
import styles from "./ConfirmatioModal.module.css";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <ModalTemplate
            isOpen={isOpen}
            title="Confirm Your Action"
            content={
                <p className={styles.modalText}>
                    Are you sure you want to accept this order?
                </p>
            }
            actions={
                <div className={styles.modalActions}>
                    <button className={styles.confirmBtn} onClick={onConfirm}>
                        Yes, Accept
                    </button>
                    <button className={styles.cancelBtn} onClick={onClose}>
                        Cancel
                    </button>
                </div>
            }
            onClose={onClose}
            modalClassName={`${styles.modalOverlay}`}
            modalContentClassName={styles.modalContent}
        />
    );
};

export default ConfirmationModal;
