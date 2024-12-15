import React from "react";
import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";
import UsersSection from "../userSection/UserSection.jsx";
import styles from "./UserPage.module.css";

const UserPage = () => {
    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.container}>
                <Sidebar active="users" />
                <UsersSection />
            </div>
        </div>
    );
};

export default UserPage;
