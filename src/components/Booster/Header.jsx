import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Dead PackMan</div>
            <nav>
                <ul className={styles.navLinks}>
                    <li><a href="/dashboard" className={styles.link}>Dashboard</a></li>
                    <li><a href="/orders" className={`${styles.link} ${styles.active}`}>My Orders</a></li>
                    <li><a href="/tags" className={styles.link}>My Game Tags</a></li>
                </ul>
            </nav>
            <a href="/profile" className={styles.profileBtn}>My Account</a>
        </header>
    );
};

export default Header;
