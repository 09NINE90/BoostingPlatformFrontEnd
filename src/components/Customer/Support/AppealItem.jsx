import React from "react";
import styles from "./AppealItem.module.css";

const AppealItem = ({ number, date, service, status }) => {
    return (
        <div className={styles.appeal}>
            <p>
                <strong>Appeal Number: {number}</strong> - {date} - {service} -{" "}
                <span className={`${styles.status} ${styles[status.toLowerCase()]}`}>{status}</span>
            </p>
            <button className={styles.viewBtn}>→</button>
        </div>
    );
};

export default AppealItem;
