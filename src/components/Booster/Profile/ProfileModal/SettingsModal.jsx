import React from "react";
import ModalTemplate from "../../../ModalTemplate/ModalTemplate.jsx";
import styles from "./SettingsModal.module.css";

const SettingsModal = ({ isOpen, onClose }) => {
    const modalContent = (
        <form className={styles.form}>
            <label htmlFor="aboutMe">About Me:</label>
            <textarea id="aboutMe" rows="5" placeholder="Update information about yourself"></textarea>
            <button type="submit" className={styles.saveBtn}>Save Changes</button>
        </form>
    );

    return (
        <ModalTemplate
            isOpen={isOpen}
            title="Edit Profile"
            content={modalContent}
            onClose={onClose}
        />
    );
};

export default SettingsModal;
