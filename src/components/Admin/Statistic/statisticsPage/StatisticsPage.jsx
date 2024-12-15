import React from "react";
import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";
import StatisticsSection from "../statisticsSection/StatisticsSection.jsx";
import styles from "./StatisticsPage.module.css";

const StatisticsPage = () => {
    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.container}>
                <Sidebar active="statistics" />
                <StatisticsSection />
            </div>
        </div>
    );
};

export default StatisticsPage;
