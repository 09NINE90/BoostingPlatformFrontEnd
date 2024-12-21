import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import OrderSection from "./OrderSection";
 import Modal from "./ProfileModal.jsx";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    return (
        <main className={styles.profilePage}>
            <ProfileInfo />
            <OrderSection onOrderClick={handleOrderClick} />
            {isModalOpen && (
                <Modal order={selectedOrder} onClose={handleCloseModal} />
            )}
        </main>
    );
};

export default ProfilePage;
