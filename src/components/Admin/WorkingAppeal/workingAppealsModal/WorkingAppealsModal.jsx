import React from "react";
import ModalTemplate from "../../../ModalTemplate/ModalTemplate.jsx";
import styles from "./WorkingAppealsModal.module.css";

const AppealModal = ({ isOpen, onClose, appeal }) => {
    const modalContent = (
        <div>
            <p><strong>Appeal ID:</strong> #{appeal.id}</p>
            <p><strong>Nickname:</strong> {appeal.nickname}</p>
            <p><strong>Platform:</strong> {appeal.platform}</p>
            <p><strong>Service:</strong> {appeal.service}</p>
            <label>Appeal Text:</label>
            <textarea defaultValue={appeal.appealText} readOnly></textarea>
        </div>
    );

    const modalActions = (
        <div className={styles.modalActions}>
            <button className={styles.approveBtn}>Approve</button>
            <button className={styles.denyBtn}>Deny</button>
        </div>
    );

    return (
        <ModalTemplate
            isOpen={isOpen}
            title="Appeal Details"
            content={modalContent}
            actions={modalActions}
            onClose={onClose}
        />
    );
};

export default AppealModal;