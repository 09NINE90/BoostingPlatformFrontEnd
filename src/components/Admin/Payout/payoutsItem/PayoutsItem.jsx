import React from "react";
import styles from "./PayoutsItem.module.css";

const PayoutItem = ({ payout, onViewClick }) => {
    return (
        <div className={styles.payoutItem}>
            <div className={styles.payoutInfo}>
                <p><strong>Booster ID:</strong> {payout.boosterId}</p>
                <p><strong>Status:</strong> {payout.status}</p>
                <p><strong>Amount:</strong> ${payout.amount}</p>
            </div>
            <button className={styles.viewBtn} onClick={onViewClick}>
                View
            </button>
        </div>
    );
};

export default PayoutItem;
