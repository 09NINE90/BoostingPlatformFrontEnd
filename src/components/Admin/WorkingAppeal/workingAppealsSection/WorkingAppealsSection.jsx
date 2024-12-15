import React, { useState } from "react";
import AppealItem from "../workingAppealsItem/WorkingAppealsItem.jsx";
import AppealModal from "../workingAppealsModal/WorkingAppealsModal.jsx";
import styles from "./WorkingAppealsSection.module.css";

const WorkingAppealsSection = () => {
    const [appeals] = useState([
        {
            id: 101,
            nickname: "JohnDoe",
            platform: "PC",
            service: "Rank Boost",
            game: "Valorant",
            appealText: "Booster is inactive for 2 days.",
        },
        {
            id: 102,
            nickname: "JaneSmith",
            platform: "Mac",
            service: "Dungeon Run",
            game: "World of Warcraft",
            appealText: "Service was not completed as expected.",
        },
    ]);

    const [selectedAppeal, setSelectedAppeal] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (appeal) => {
        setSelectedAppeal(appeal);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedAppeal(null);
    };

    return (
        <section className={styles.workingAppealsSection}>
            <div className={styles.filterContainer}>
                <input type="text" placeholder="Nickname" />
                <input type="text" placeholder="Date" />
                <input type="text" placeholder="Appeal ID" />
                <input type="text" placeholder="Game" />
                <input type="text" placeholder="Platform" />
                <button>Apply</button>
            </div>

            <div className={styles.appealsList}>
                {appeals.map((appeal) => (
                    <AppealItem
                        key={appeal.id}
                        appeal={appeal}
                        onClick={() => openModal(appeal)}
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

export default WorkingAppealsSection;
