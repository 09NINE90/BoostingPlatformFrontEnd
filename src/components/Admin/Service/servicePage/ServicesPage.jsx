import React from "react";
import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";
import ServiceSection from "../serviceSection/ServiceSection.jsx";
import styles from "./ServivcesPage.module.css";

const ServicesPage = () => {
    console.log("ServicesPage rendered");
    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.container}>
                <Sidebar active="services" />
                <ServiceSection />
            </div>
        </div>
    );
};

export default ServicesPage;
