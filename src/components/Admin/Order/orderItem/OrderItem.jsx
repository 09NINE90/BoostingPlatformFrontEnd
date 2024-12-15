import React from "react";
import styles from "../orderSection/OrdersSection.module.css";

const OrderItem = ({ order, onClick }) => {
    return (
        <div
            className={styles.orderItem}
            data-status={order.status}
            onClick={() => {
                console.log("Order item clicked:", order); // Отладка клика
                onClick();
            }}
        >
            <p>
                <strong>Order ID:</strong> #{order.id}
            </p>
            <p>
                <strong>Game:</strong> {order.game}
            </p>
            <p className={styles.orderStatus}>{order.status}</p>
        </div>
    );
};

export default OrderItem;
