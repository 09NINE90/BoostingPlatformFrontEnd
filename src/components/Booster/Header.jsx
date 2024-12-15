import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Dead PackMan</div>
            <nav>
                <ul className={styles.navLinks}>
                    <li><a href="/booster/dashboard.html" className={styles.active}>Dashboard</a></li>
                    <li><a href="/booster/booster-orders.html">My Orders</a></li>
                    <li><a href="/booster/my-game-tags.html">My Game Tags</a></li>
                </ul>
            </nav>
            <a href="/booster/profile.html" className={styles.profileBtn}>My Profile</a>
        </header>
    );
};

export default Header;
