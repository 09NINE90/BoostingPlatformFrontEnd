import React, { useState } from "react";
import OrderItem from "../orderItem/OrderItem.jsx";
import OrderModal from "../OrderModal/OrderModal.jsx";
import styles from "./OrdersSection.module.css";

const OrdersSection = () => {
    const [orders] = useState([
        {
            id: 1,
            game: "Valorant",
            platform: "PC",
            services: "Rank Boost",
            status: "Pending",
            estimateDate: "06.12.2024",
            timezone: "-7:00",
            vpn: "Los-Angeles, USA",
            price: 600,
            bonus: 125,
            chat: [
                { sender: "User", text: "Can you update me on the order status?", timestamp: "12:34 PM" },
                { sender: "Booster", text: "Sure, it's almost complete!", timestamp: "12:35 PM" },
            ],
        },
        {
            id: 2,
            game: "World of Warcraft",
            platform: "PC",
            services: "Dungeon Run",
            status: "Completed",
            estimateDate: "05.12.2024",
            timezone: "+1:00",
            vpn: "Berlin, Germany",
            price: 300,
            bonus: 50,
            chat: [
                { sender: "User", text: "Great job on completing the run!", timestamp: "10:00 AM" },
                { sender: "Booster", text: "Thank you!", timestamp: "10:01 AM" },
            ],
        },
        {
            id: 3,
            game: "CoD BO6",
            platform: "PC",
            services: "Deboost",
            status: "Canceled",
            estimateDate: "05.12.2024",
            timezone: "+1:00",
            vpn: "Berlin, Germany",
            price: 300,
            bonus: 50,
            chat: [
                { sender: "User", text: "Great job on completing the run!", timestamp: "10:00 AM" },
                { sender: "Booster", text: "Thank you!", timestamp: "10:01 AM" },
            ],
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleOrderClick = (order) => {
        console.log("Order clicked:", order); // Проверка клика
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        console.log("Modal closed"); // Проверка закрытия
        setIsModalOpen(false);
        setSelectedOrder(null);
    }

    return (
        <section className={styles.ordersSection}>
            <div className={styles.filterContainer}>
                <input type="text" placeholder="Search Order ID"/>
                <select>
                    <option value="all">All Statuses</option>
                    <option value="solved">Solved</option>
                    <option value="in_progress">In Progress</option>
                </select>
                <select>
                    <option value="all">All Games</option>
                    <option value="valorant">Valorant</option>
                    <option value="wow">World of Warcraft</option>
                    <option value="lol">League of Legends</option>
                </select>
                <button>Apply</button>
            </div>
            <div className={styles.ordersList}>
                {orders.map((order) => (
                    <OrderItem
                        key={order.id}
                        order={order}
                        onClick={() => handleOrderClick(order)}
                    />
                ))}
            </div>

            {isModalOpen && selectedOrder && (
                <OrderModal
                    isOpen={isModalOpen}
                    order={selectedOrder}
                    onClose={closeModal}
                />
            )}
        </section>
    );
};

export default OrdersSection;
