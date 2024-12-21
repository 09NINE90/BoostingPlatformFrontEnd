import React, { useState } from "react";
import AppealItem from "../appealsItem/AppealsItem.jsx";
import AppealModal from "../appealsModal/AppealsModal.jsx";
import styles from "./AppealsSection.module.css";

const AppealsSection = () => {
    const [appeals] = useState([
        {
            id: 1,
            date: "20.11.2024",
            orderId: "#234B5",
            game: "BO6/Dark Matte Camo",
            reason: "Booster is inactive",
            status: "solved",
            chat: [
                { sender: "Customer", text: "Booster is inactive.", timestamp: "10:01 AM" },
                { sender: "Moderator", text: "Please provide details.", timestamp: "10:05 AM" },
                { sender: "Customer", text: "Booster is inactive.", timestamp: "10:01 AM" },
                { sender: "Moderator", text: "Please provide details.", timestamp: "10:05 AM" },
                { sender: "Customer", text: "Booster is inactive.", timestamp: "10:01 AM" },
                { sender: "Moderator", text: "Please provide details.", timestamp: "10:05 AM" },
                { sender: "Customer", text: "Booster is inactive.", timestamp: "10:01 AM" },
                { sender: "Moderator", text: "Please provide details.", timestamp: "10:05 AM" },
                { sender: "Customer", text: "Booster is inactive.", timestamp: "10:01 AM" },
                { sender: "Moderator", text: "Please provide details.", timestamp: "10:05 AM" },
                { sender: "Customer", text: "Booster is inactive.", timestamp: "10:01 AM" },
                { sender: "Moderator", text: "Please provide details.", timestamp: "10:05 AM" },
            ],
        },
        {
            id: 2,
            date: "20.11.2024",
            orderId: "#234B6",
            game: "Valorant",
            reason: "Wrong account login details",
            status: "in_progress",
            chat: [
                { sender: "Customer", text: "I cannot log in to my account.", timestamp: "11:01 AM" },
                { sender: "Moderator", text: "Checking the issue.", timestamp: "11:05 AM" },
            ],
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAppeal, setSelectedAppeal] = useState(null);

    const handleAppealClick = (appeal) => {
        setSelectedAppeal(appeal);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedAppeal(null);
    };

    return (
        <section className={styles.appealsSection}>
            <div className={styles.filterContainer}>
                <input type="text" placeholder="Search Order ID" />
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
            <div className={styles.appealsList}>
                {appeals.map((appeal) => (
                    <AppealItem
                        key={appeal.id}
                        appeal={appeal}
                        onClick={() => handleAppealClick(appeal)}
                    />
                ))}
            </div>
            {isModalOpen && selectedAppeal && (
                <AppealModal
                    isOpen={isModalOpen}
                    appeal={selectedAppeal}
                    onClose={closeModal}
                />
            )}
        </section>
    );
};

export default AppealsSection;
