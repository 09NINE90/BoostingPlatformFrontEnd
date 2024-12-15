import React, { useState } from "react";
import PayoutItem from "../payoutsItem/PayoutsItem.jsx";
import PayoutModal from "../payoutsModal/PayoutsModal.jsx";
import styles from "./PayoutsSection.module.css";

const PayoutsSection = () => {
    const [payouts] = useState([
        { id: 1, boosterId: "Booster01", status: "Pending", amount: 500 },
        { id: 2, boosterId: "Booster02", status: "Completed", amount: 750 },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPayout, setSelectedPayout] = useState(null);

    const handleViewClick = (payout) => {
        setSelectedPayout(payout);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPayout(null);
    };

    return (
        <section className={styles.payoutsSection}>
            <div className={styles.filterContainer}>
                <input type="text" placeholder="Search by Booster ID" />
                <select>
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="rejected">Rejected</option>
                </select>
                <button>Apply</button>
            </div>

            <div className={styles.payoutsList}>
                {payouts.map((payout) => (
                    <PayoutItem
                        key={payout.id}
                        payout={payout}
                        onViewClick={() => handleViewClick(payout)}
                    />
                ))}
            </div>

            {isModalOpen && (
                <PayoutModal
                    isOpen={isModalOpen}
                    payout={selectedPayout}
                    onClose={closeModal}
                />
            )}
        </section>
    );
};

export default PayoutsSection;
