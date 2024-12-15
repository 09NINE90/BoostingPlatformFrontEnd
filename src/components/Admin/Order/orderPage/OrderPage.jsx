import React from "react";
import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";
import OrdersSection from "../orderSection/OrderSection.jsx";

import styles from "./OrderPage.module.css";

const OrderPage = () => {
    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.container}>
                <Sidebar active="orders" />
                <OrdersSection />
            </div>
        </div>
    );
};

export default OrderPage;
