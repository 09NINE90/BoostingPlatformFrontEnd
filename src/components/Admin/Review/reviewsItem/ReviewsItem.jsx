import React from "react";
import styles from "./ReviewItem.module.css";

const ReviewItem = ({ review, onSettingsClick }) => {
    return (
        <div className={styles.reviewItem}>
            <p>
                <strong>User ID:</strong> {review.userId}
            </p>
            <p>
                <strong>Booster ID:</strong> {review.boosterId}
            </p>
            <p>
                <strong>Order ID:</strong> {review.orderId}
            </p>
            <p className={styles.reviewText}>"{review.text}"</p>
            <button className={styles.settingsBtn} onClick={onSettingsClick}>
                ⚙️
            </button>
        </div>
    );
};

export default ReviewItem;
