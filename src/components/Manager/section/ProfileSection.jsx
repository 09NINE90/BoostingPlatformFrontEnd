import React from "react";
import styles from "./ProfileSection.module.css";

const ProfileSection = () => {
    return (
        <section className={styles.profileSection}>
            <div className={styles.profileContainer}>
                <div className={styles.profileInfo}>
                    <img
                        src="/vite.svg"
                        alt="Moderator Avatar"
                        className={styles.moderatorAvatar}
                    />
                    <div className={styles.infoDetails}>
                        <p><strong>Nickname:</strong> ModeratorX</p>
                        <p><strong>Date Assigned:</strong> 20th Nov 2023</p>
                    </div>
                </div>
                <div className={styles.statsSection}>
                    <h3>Statistics</h3>
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <p>Total Orders Processed</p>
                            <span>120</span>
                        </div>
                        <div className={styles.statItem}>
                            <p>Appeals Resolved</p>
                            <span>35</span>
                        </div>
                        <div className={styles.statItem}>
                            <p>Reviews Moderated</p>
                            <span>56</span>
                        </div>
                        <div className={styles.statItem}>
                            <p>Average Response Time</p>
                            <span>2m 15s</span>
                        </div>
                        <div className={styles.statItem}>
                            <p>Active Boosters Managed</p>
                            <span>18</span>
                        </div>
                        <div className={styles.statItem}>
                            <p>Total Fines Issued</p>
                            <span>$450</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
