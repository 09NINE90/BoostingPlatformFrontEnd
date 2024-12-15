import React from "react";
import Header from "../Header.jsx";
import OrderTable from "./OrderTable.jsx";

const DashboardPage = () => {
    return (
        <div>
            <Header />
            <main>
                <OrderTable />
            </main>
        </div>
    );
};

export default DashboardPage;
