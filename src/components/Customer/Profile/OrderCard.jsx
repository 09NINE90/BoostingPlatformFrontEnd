import React from "react";
import styles from "./OrderCard.module.css";

const OrderCard = ({ order, onClick }) => {
    return (
        <div className={styles.order} onClick={onClick}>
            <p>
                <strong>ORDER ID:</strong> {order.id}
            </p>
            <p>
                <strong>GAME:</strong> {order.game}
            </p>
            <p>
                <strong>SERVICE:</strong> {order.service}
            </p>
            <p>
                <strong>SESSION:</strong>{" "}
                <span
                    className={
                        order.session === "ACTIVE"
                            ? styles.active
                            : styles.inactive
                    }
                >
                    {order.session}
                </span>
            </p>
            <p>
                <strong>Last message:</strong> {order.lastMessage}
            </p>
        </div>
    );
};

export default OrderCard;
