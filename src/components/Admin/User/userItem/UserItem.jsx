import React from "react";
import styles from "../userSection/UserSection.module.css";

const UserItem = ({ user, onClick }) => {
    return (
        <div className={styles.userItem} onClick={onClick}>
            <span>{user.nickname}</span>
            <span>{`#${user.id}`}</span>
            <span>{user.role}</span>
            <button className={styles.settingsBtn}>⚙️</button>
        </div>
    );
};

export default UserItem;
