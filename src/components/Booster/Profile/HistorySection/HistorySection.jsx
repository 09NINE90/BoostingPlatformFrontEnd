import React from "react";
import styles from "./HistorySection.module.css";

const HistorySection = () => {
    return (
        <section className={styles.historySection}>
            <h4>Order History</h4>
            <div className={styles.orderHistory}>
                <div className={styles.order}>24.11.24 | Order ID: 24587 | Price: $600 | Status: <span className={styles.paid}>Paid</span></div>
                <div className={styles.order}>24.11.24 | Order ID: 24587 | Price: $40 | Status: <span className={styles.inProgress}>In Progress</span></div>
                <div className={styles.order}>24.11.24 | Order ID: 24587 | Price: $70 | Status: <span className={styles.created}>Request Created</span></div>
                <div className={styles.order}>24.11.24 | Order ID: 24587 | Price: $50 | Status: <span className={styles.error}>Error</span></div>
            </div>
        </section>
    );
};

export default HistorySection;
