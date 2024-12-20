import React from "react";
import styles from "./StatusSection.module.css";

const StatusSection = () => {
    return (
        <section className={styles.statusSection}>
            <h4>Account Status</h4>
            <div className={styles.sliderContainer}>
                <div className={styles.sliderLabels}>
                    <span className={styles.left}>Young Status</span>
                    <span className={styles.middle}>Regular Status</span>
                    <span className={styles.right}>Premium Status</span>
                </div>
                <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: "50%" }}></div>
                </div>
            </div>
        </section>
    );
};

export default StatusSection;
