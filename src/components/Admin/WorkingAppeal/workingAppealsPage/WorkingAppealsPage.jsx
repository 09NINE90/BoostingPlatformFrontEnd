import React from "react";
import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";
import WorkingAppealsSection from "../workingAppealsSection/WorkingAppealsSection.jsx";
import styles from "./WorkingAppealsPage.module.css";

const WorkingAppealsPage = () => {
    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.container}>
                <Sidebar active="working-appeals" />
                <WorkingAppealsSection />
            </div>
        </div>
    );
};

export default WorkingAppealsPage;
