import React from "react";
import ModalTemplate from "../../../ModalTemplate/ModalTemplate.jsx";
import styles from "./ReviewModal.module.css";

const ReviewModal = ({ isOpen, onClose, review, onEdit, onApply, onReject }) => {
    if (!review) return null;

    return (
        <ModalTemplate
            isOpen={isOpen}
            title="Review Details"
            content={
                <div className={styles.modalBody}>
                    {/* Левая секция: Information */}
                    <div className={styles.infoSection}>
                        <p>
                            <strong>User ID:</strong> {review.userId}
                        </p>
                        <p>
                            <strong>Booster ID:</strong> {review.boosterId}
                        </p>
                        <p>
                            <strong>Order ID:</strong> {review.orderId}
                        </p>
                        <div className={styles.infoActions}>
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
                    </div>

                    {/* Правая секция: Review Text */}
                    <div className={styles.reviewSection}>
                        <label htmlFor="reviewText">Review Text:</label>
                        <textarea
                            id="reviewText"
                            defaultValue={review.text}
                            readOnly={!review.isEditable}
                            className={styles.reviewTextarea}
                        />
                    </div>
                </div>
            }
            actions={null} // Кнопки встроены в секцию Information
            onClose={onClose}
        />
    );
};

export default ReviewModal;
