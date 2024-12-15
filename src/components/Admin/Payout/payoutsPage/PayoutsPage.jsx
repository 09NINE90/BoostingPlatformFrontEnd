import React from "react";
import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";
import PayoutsSection from "../payoutsSection/PayoutsSection.jsx";
import styles from "./PayoutsPage.module.css";

const PayoutsPage = () => {
    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.container}>
                <Sidebar active="payouts" />
                <PayoutsSection />
            </div>
        </div>
    );
};

export default PayoutsPage;
