import React from "react";
import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";
import AppealsSection from "../appealsSection/AppealsSection.jsx";
import styles from "./AppealsPage.module.css";

const AppealsPage = () => {
    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.container}>
                <Sidebar active="appeals" />
                <AppealsSection />
            </div>
        </div>
    );
};

export default AppealsPage;
