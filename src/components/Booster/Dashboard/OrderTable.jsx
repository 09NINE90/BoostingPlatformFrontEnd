import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import styles from "./OrderTable.module.css";

const OrderTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const orders = [
        { id: 23501, name: "Dark matter camo boost", game: "CoD: BO6", price: 1200, platform: "🎮 PlayStation", details: "Start: ASAP\nRegion: Los Angeles" },
        { id: 23502, name: "Asc 3 - Immo 2 boost", game: "Valorant", price: 259, platform: "💻 PC", details: "Start: EU Agents: Reyna" },
        { id: 23503, name: "Last wish raid boost", game: "Destiny 2", price: 1200, platform: "🎮 Xbox", details: "Start: NA Addons: All secret chests" },
    ];

    const handleAcceptOrder = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedOrder(null);
        setIsModalOpen(false);
    };

    return (
        <section className={styles.orderSection}>
            <h2>Available Orders</h2>
            <div className={styles.orderTable}>
                <div className={styles.orderHeader}>
                    <div>Available Orders</div>
                    <div>Game</div>
                    <div>Description</div>
                    <div>Platform</div>
                    <div>Price</div>
                    <div>Action</div>
                </div>
                {orders.map((order) => (
                    <div key={order.id} className={styles.orderRow}>
                        <div>{order.name}<br /><span>ID: {order.id}</span></div>
                        <div>{order.game}</div>
                        <div>{order.details}</div>
                        <div>{order.platform}</div>
                        <div>${order.price.toFixed(2)}</div>
                        <button className={styles.actionBtn} onClick={() => handleAcceptOrder(order)}>
                            Accept
                        </button>
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <ConfirmationModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onConfirm={() => {
                        alert(`Order ${selectedOrder.id} accepted!`);
                        handleCloseModal();
                    }}
                />
            )}
        </section>
    );
};

export default OrderTable;
