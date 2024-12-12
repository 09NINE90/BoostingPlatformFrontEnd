import React from "react";
import styles from "./Navigation.module.css";
import { LinksData } from "./LinksData.js";
import { Link } from "react-router-dom"; // Updated for react-router-dom compatibility

const Navigation = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Dead PackMan</div>
            <nav className={styles.navLinks}>
                {LinksData.map((link) => (
                    <Link to={link.path} key={link.path} className={styles.navLink}>{link.name}</Link>
                ))}
            </nav>
            <div className={styles.headerIcons}>
                <a href="#" className={styles.account}>My Account</a>
                <a href="#" className={styles.cart}>🛒</a>
            </div>
        </header>
    );
};

export default Navigation;