import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Dead PackMan</div>
            <nav>
                <ul className={styles.navLinks}>
                    <li><a href="#home" className={styles.active}>Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
