import React from "react";
import ModalTemplate from "../../../ModalTemplate/ModalTemplate.jsx";
import styles from "./UserModal.module.css";

const UserModal = ({ isOpen, onClose, user, onOpenMiniModal }) => {
    const modalContent = (
        <div>
            <label>Nickname:</label>
            <input type="text" defaultValue={user.nickname} />

            <label>Role:</label>
            <select defaultValue={user.role}>
                <option value="customer">Customer</option>
                <option value="booster">Booster</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
            </select>

            <label>User ID:</label>
            <input type="text" defaultValue={`#${user.id}`} readOnly />

            <label>Registration Date:</label>
            <input type="text" defaultValue={user.registrationDate} readOnly />

            <label>Amount of Orders:</label>
            <input type="text" defaultValue={user.amountOrders} readOnly />

            <label>Spent Money:</label>
            <input type="text" defaultValue={`$${user.spentMoney}`} readOnly />
        </div>
    );

    const modalActions = (
        <div>
            <button
                className={styles.banBtn}
                onClick={() => onOpenMiniModal("ban")}
            >
                Ban
            </button>
            <button
                className={styles.fineBtn}
                onClick={() => onOpenMiniModal("fine")}
            >
                Fine
            </button>
            <button className={styles.applyBtn}>Apply</button>
        </div>
    );

    return (
        <ModalTemplate
            isOpen={isOpen}
            title="User Settings"
            content={modalContent}
            actions={modalActions}
            onClose={onClose}
        />
    );
};

export default UserModal;
