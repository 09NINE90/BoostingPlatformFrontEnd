import React from "react";
import styles from "./AppealsItem.module.css";

const AppealItem = ({ appeal, onClick }) => {
    return (
        <div className={`${styles.appealItem}`} onClick={onClick}>
            <div>
                <span className={styles.appealDate}>{appeal.date}</span>
                <span>{` - ${appeal.reason} - ${appeal.orderId} - ${appeal.game}`}</span>
            </div>
            <span className={`${styles.status} ${styles[appeal.status]}`}>
                {appeal.status.replace("_", " ")}
            </span>
        </div>
    );
};

export default AppealItem;
