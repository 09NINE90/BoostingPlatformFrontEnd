import React from "react";
import ModalTemplate from "./ModalTemplate";
import styles from "../styles/OrderDetailsModal.module.css";

const OrderDetailsModal = ({ isOpen, onClose, order }) => {
    return (
        <ModalTemplate
            isOpen={isOpen}
            title="Order Details"
            content={
                <div className={styles.modalBody}>
                    <div className={styles.leftColumn}>
                        <h3>Order Information:</h3>
                        <p>Order ID: {order.id}</p>
                        <p>Game: {order.game}</p>
                        <p>Platform: {order.platform}</p>
                        <p>Service: {order.service}</p>
                        <p>Status: <span className={`${styles.status} ${styles[order.status]}`}>{order.statusText}</span></p>
                    </div>
                    <div className={styles.centerColumn}>
                        <h3>Chat</h3>
                        <div className={styles.chatMessages}>
                            {order.chat.map((msg, index) => (
                                <p key={index} className={styles.message}>{msg}</p>
                            ))}
                        </div>
                        <div className={styles.chatInput}>
                            <input type="text" placeholder="Write a message..." />
                            <button className={styles.sendMessage}>&rarr;</button>
                        </div>
                    </div>
                    <div className={styles.rightColumn}>
                        <h3>Additional Info:</h3>
                        <p>Price: ${order.price}</p>
                    </div>
                </div>
            }
            actions={
                <div className={styles.modalActions}>
                    <button onClick={onClose} className={styles.closeBtn}>Close</button>
                </div>
            }
            onClose={onClose}
        />
    );
};

export default OrderDetailsModal;
