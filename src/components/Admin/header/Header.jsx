import React from "react";
import styles from "./Header.module.css";

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logo}>
            Dead PackMan <span>Admin</span>
        </div>
        <nav>
            <a href="/" className={styles.profileBtn}>
                My Account
            </a>
        </nav>
    </header>
);

export default Header;
