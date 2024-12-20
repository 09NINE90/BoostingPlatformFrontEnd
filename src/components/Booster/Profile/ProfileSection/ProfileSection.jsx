import React from "react";
import styles from "./ProfileSection.module.css";

const ProfileSection = ({ onOpenSettings }) => {
    return (
        <section className={styles.profileSection}>
            <div className={styles.profileHeader}>
                <div className={styles.profilePicture}>
                    <img src="/vite.svg" alt="Profile" />
                </div>
                <div className={styles.profileInfo}>
                    <h3>Brokenhead</h3>
                    <p>Orders Done: <span>12</span></p>
                    <p>Total Earn: <span>$1,000,000</span></p>
                    <p>Total Tips: <span>$910,000</span></p>
                    <p>Rating: <span>5.0 ★</span></p>
                </div>
                <button className={styles.settingsBtn} onClick={onOpenSettings}>⚙</button>
            </div>
            <div className={styles.aboutMe}>
                <h4>About Me</h4>
                <textarea placeholder="Write here information about you - customers can see it."></textarea>
            </div>
        </section>
    );
};

export default ProfileSection;
