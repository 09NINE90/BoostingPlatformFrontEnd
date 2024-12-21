import React from "react";
import styles from "./OrderCard.module.css";

const OrderCard = ({ order, onOpenModal }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span>Order ID: {order.id}</span>
                <span className={styles.price}>${order.price}</span>
            </div>
            <div className={styles.details}>
                <p>Game: {order.game}</p>
                <p>Platform: {order.platform}</p>
                <p>Service: {order.service}</p>
                <p>Status:
                    <span className={`${styles.status} ${styles[order.status.replace(" ", "-").toLowerCase()]}`}>
                        {order.status}
                    </span>
                </p>
                <p>Estimate date: {order.estimateDate}</p>
            </div>
            <button className={styles.action} onClick={() => onOpenModal(order)}>
                {order.status === "done" ? "Finished" : "Start Session"}
            </button>
        </div>
    );
};

export default OrderCard;
