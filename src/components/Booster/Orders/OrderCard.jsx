import React from "react";
import styles from "../styles/OrderCard.module.css";

const OrderCard = ({ order, onOpenDetails }) => {
    return (
        <div className={styles.orderCard}>
            <div className={styles.orderHeader}>
                <span className={styles.orderId}>Order ID: {order.id}</span>
                <span className={styles.orderPrice}>${order.price}</span>
            </div>
            <div className={styles.orderDetails}>
                <p>Game: {order.game}</p>
                <p>Platform: {order.platform}</p>
                <p>Service: {order.service}</p>
                <p>Status: <span className={`${styles.status} ${styles[order.status]}`}>{order.statusText}</span></p>
                <p>Estimate date: {order.estimateDate}</p>
                <p>Last message: <span>{order.lastMessage}</span></p>
            </div>
            <button className={styles.orderAction} onClick={() => onOpenDetails(order)}>
                {order.actionText}
            </button>
        </div>
    );
};

export default OrderCard;
