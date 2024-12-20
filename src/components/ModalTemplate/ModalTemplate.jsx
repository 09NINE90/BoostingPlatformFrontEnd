import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalTemplate.module.css'; // Импортируем стили
import classNames from 'classnames';

const ModalTemplate = ({
                           isOpen,
                           title,
                           content,
                           actions,
                           onClose,
                           modalClassName,
                           modalContentClassName,
                       }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={classNames(styles.modal, modalClassName)}>
                <div className={classNames(styles.modalContent, modalContentClassName)}>
                    <button className={styles.modalClose} onClick={onClose}>
                        &times;
                    </button>
                    <div className={styles.modalBody}>{content}</div>
                    <div className={styles.modalActions}>{actions}</div>
                </div>
            </div>
        </div>
    );
};

ModalTemplate.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string,
    content: PropTypes.node,
    actions: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    modalClassName: PropTypes.string,
    modalContentClassName: PropTypes.string,
};

export default ModalTemplate;
