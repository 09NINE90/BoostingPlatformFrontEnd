import React, { useState } from "react";
import OrderCard from "../orderCard/OrderCard.jsx";
import OrderModal from "../orderModal/OrderModal.jsx";
import styles from "./OrderSection.module.css";

const ordersData = [
    { id: 244857, price: 600, game: "CoD BO6", platform: "PS", service: "Dark Matter Camo", status: "In progress", estimateDate: "24.11.24" },
    { id: 244858, price: 500, game: "CoD BO6", platform: "PC", service: "Dark Matter Camo", status: "Done", estimateDate: "24.11.24" },
    { id: 244859, price: 400, game: "CoD BO6", platform: "Xbox", service: "Dark Matter Camo", status: "Not started", estimateDate: "24.11.24" }
];

const OrderSection = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);

    const openModal = (order) => setSelectedOrder(order);
    const closeModal = () => setSelectedOrder(null);

    return (
        <section className={styles.ordersSection}>
            <div className={styles.container}>
                {ordersData.map((order) => (
                    <OrderCard key={order.id} order={order} onOpenModal={() => openModal(order)} />
                ))}
            </div>
            {selectedOrder && (
                <OrderModal
                    isOpen={!!selectedOrder}
                    order={selectedOrder}
                    onClose={closeModal}
                />
            )}
        </section>
    );
};

export default OrderSection;
