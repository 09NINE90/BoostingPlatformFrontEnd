import React from "react";
import ModalTemplate from "../../../ModalTemplate/ModalTemplate.jsx"; // Используем общий шаблон
import styles from "./ConfirmatioModal.module.css";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <ModalTemplate
            isOpen={isOpen}
            content={
                <div className={styles.modalContent}>
                    <h1 className={styles.modalTitle}>Confirm Your Action</h1>
                    <p className={styles.modalText}>
                        Are you sure you want to accept this order?
                    </p>
                </div>
            }
            actions={
                <div className={styles.actionsContainer}>
                    <button className={styles.confirmBtn} onClick={onConfirm}>
                        Yes, Accept
                    </button>
                </div>
            }
            onClose={onClose}
        />
    );
};

export default ConfirmationModal;
