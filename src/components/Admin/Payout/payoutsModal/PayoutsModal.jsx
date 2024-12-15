import React from "react";
import ModalTemplate from '../../../ModalTemplate/ModalTemplate.jsx';
import styles from "./PayoutsModal.module.css";

const PayoutModal = ({ isOpen, payout, onClose }) => {
    if (!payout) return null;

    return (
        <ModalTemplate
            isOpen={isOpen}
            title="Payout Information"
            content={
                <div>
                    <p><strong>Amount:</strong> ${payout.amount}</p>
                    <p><strong>Destination:</strong> PayPal - {payout.boosterId}@example.com</p>
                    <p><strong>Orders:</strong> Order #12345, Order #67890</p>
                </div>
            }
            actions={
                <div>
                    <button className={styles.applyBtn}>Apply</button>
                    <button className={styles.rejectBtn} onClick={onClose}>
                        Reject
                    </button>
                </div>
            }
            onClose={onClose}
        />

    );
};

export default PayoutModal;
