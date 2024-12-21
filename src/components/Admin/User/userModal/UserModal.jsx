import React, { useState } from "react";
import ModalTemplate from "../../../ModalTemplate/ModalTemplate.jsx";
import styles from "./UserModal.module.css";

const UserModal = ({ isOpen, onClose, user }) => {
    const [miniModalType, setMiniModalType] = useState(null);

    const openMiniModal = (type) => {
        setMiniModalType(type);
    };

    const closeMiniModal = () => {
        setMiniModalType(null);
    };

    const mainModalContent = (
        <div className={styles.modalContent}>
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

    const mainModalActions = (
        <div className={styles.modalActions}>
            <button className={styles.banBtn} onClick={() => openMiniModal("ban")}>
                Ban
            </button>
            <button className={styles.fineBtn} onClick={() => openMiniModal("fine")}>
                Fine
            </button>
            <button className={styles.applyBtn}>Apply</button>
        </div>
    );

    const miniModalContent =
        miniModalType === "ban" ? (
            <textarea placeholder="Reason for ban" className={styles.textarea}></textarea>
        ) : (
            <>
                <input type="number" placeholder="Fine Amount" className={styles.input} />
                <textarea placeholder="Reason for fine" className={styles.textarea}></textarea>
            </>
        );

    const miniModalActions = (
        <div className={styles.miniModalActions}>
            <button className={styles.applyBtn}>Confirm</button>
        </div>
    );


    return (
        <>
            {/* Основное модальное окно */}
            <ModalTemplate
                isOpen={isOpen}
                title="User Settings"
                content={mainModalContent}
                actions={mainModalActions}
                onClose={onClose}
                modalClassName={styles.widerModal} // Добавляем ширину
            />

            {/* Встроенный мини-модал */}
            {miniModalType && (
                <ModalTemplate
                    isOpen={!!miniModalType}
                    title={miniModalType === "ban" ? "Ban User" : "Fine User"}
                    content={miniModalContent}
                    actions={miniModalActions}
                    onClose={closeMiniModal}
                />
            )}
        </>
    );
};

export default UserModal;
