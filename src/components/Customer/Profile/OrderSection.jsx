import React, { useState } from "react";
import OrderCard from "./OrderCard";
import styles from "./OrderSection.module.css";

const orders = [
    {
        id: 244857,
        game: "CoD BO6",
        service: "Dark Matter camo",
        session: "ACTIVE",
        lastMessage: "I'll continue tomorrow at 9:00 am.",
    },
    {
        id: 244858,
        game: "CoD BO6",
        service: "Dark Matter camo",
        session: "INACTIVE",
        lastMessage: "I'll continue tomorrow at 9:00 am.",
    },
];

const OrderSection = ({ onOrderClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.orderSection}>
            <button
                className={styles.toggleOrdersBtn}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                My Orders ➔
            </button>
            {isExpanded && (
                <div className={styles.ordersList}>
                    <h3>MY ORDERS</h3>
                    {orders.map((order) => (
                        <OrderCard
                            key={order.id}
                            order={order}
                            onClick={() => onOrderClick(order)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default OrderSection;
