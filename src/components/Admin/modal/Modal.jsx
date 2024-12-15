import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <div className={`${styles.modal} ${isOpen ? styles.show : ""}`}>
            <div className={styles.modalContent}>
                <button className={styles.modalClose} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Modal;
