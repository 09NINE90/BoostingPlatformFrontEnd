import React from "react";
import ModalTemplate from "../../../ModalTemplate/ModalTemplate.jsx";
import styles from "./MiniModal.module.css";

const MiniModal = ({ type, isOpen, onClose }) => {
    const modalContent =
        type === "ban" ? (
            <textarea placeholder="Reason for ban"></textarea>
        ) : (
            <>
                <input type="number" placeholder="Fine Amount" />
                <textarea placeholder="Reason for fine"></textarea>
            </>
        );

    const modalActions = (
        <div>
            <button className={styles.applyBtn}>Apply</button>
        </div>
    );

    return (
        <ModalTemplate
            isOpen={isOpen}
            title={type === "ban" ? "Ban User" : "Fine User"}
            content={modalContent}
            actions={modalActions}
            onClose={onClose}
        />
    );
};

export default MiniModal;
