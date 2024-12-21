import React from "react";
import GamesGrid from "../Grid/ServicesGrid.jsx";
import styles from "./ServicesPage.module.css";

const ServicesPage = () => {
    return (
        <main className={styles.servicesPage}>
            <h1 className={styles.servicesTitle}>Our Services</h1>
            <GamesGrid />
        </main>
    );
};

export default ServicesPage;
