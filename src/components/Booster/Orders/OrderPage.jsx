import React from "react";
import Header from "../Header.jsx";
import OrderSection from "./orderSection/OrderSection.jsx";

const OrderPage = () => {
    return (
        <div>
            <Header />
            <main>
                <OrderSection />
            </main>
        </div>
    );
};

export default OrderPage;
