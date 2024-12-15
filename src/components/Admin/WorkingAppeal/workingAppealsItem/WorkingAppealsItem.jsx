import React from "react";
import styles from "./WorkingAppealsItem.module.css";

const AppealItem = ({ appeal, onClick }) => {
    return (
        <div className={styles.appealItem} onClick={onClick}>
            <span className={styles.appealId}>#{appeal.id}</span>
            <span className={styles.nickname}>{appeal.nickname}</span>
            <span className={styles.game}>{appeal.game}</span>
            <span className={styles.platform}>{appeal.platform}</span>
            <button className={styles.viewBtn}>View</button>
        </div>
    );
};

export default AppealItem;
