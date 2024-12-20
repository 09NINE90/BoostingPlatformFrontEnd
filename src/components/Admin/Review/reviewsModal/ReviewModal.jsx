import React from "react";
import ModalTemplate from "../../../ModalTemplate/ModalTemplate.jsx";
import styles from "./ReviewModal.module.css";

const ReviewModal = ({ isOpen, onClose, review, onEdit, onApply, onReject }) => {
    if (!review) return null;

    const modalContent = (
        <div>
            <p>
                <strong>User ID:</strong> {review.userId}
            </p>
            <p>
                <strong>Booster ID:</strong> {review.boosterId}
            </p>
            <p>
                <strong>Order ID:</strong> {review.orderId}
            </p>
            <label htmlFor="reviewText">Review Text:</label>
            <textarea
                id="reviewText"
                defaultValue={review.text}
                readOnly={!review.isEditable}
            />
        </div>
    );

    const modalActions = (
        <div className={styles.modalActions}>
            <button className={styles.editBtn} onClick={onEdit}>
                Edit
            </button>
            <button className={styles.applyBtn} onClick={onApply}>
                Apply
            </button>
            <button className={styles.rejectBtn} onClick={onReject}>
                Reject
            </button>
        </div>
    );

    return (
        <ModalTemplate
            isOpen={isOpen}
            title="Review Details"
            content={modalContent}
            actions={modalActions}
            onClose={onClose}
        />
    );
};

export default ReviewModal;
