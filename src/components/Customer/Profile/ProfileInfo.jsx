import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <section className={styles.profileInfo}>
            <div className={styles.profileCard}>
                <div className={styles.profileHeader}>
                    <img src="/vite.svg" alt="Profile Picture" />
                    <h3>BROKENHEAD</h3>
                    <p>aleph@example.com</p>
                </div>
                <div className={styles.profileStats}>
                    <p>ORDERS: <span>12</span></p>
                    <p>TOTAL SPENT: <span>$1,000</span></p>
                    <p>STATUS: <span>REGULAR</span></p>
                    <p>MY PERSONAL DISCOUNT: <span>5%</span></p>
                </div>
            </div>
        </section>
    );
};

export default ProfileInfo;
