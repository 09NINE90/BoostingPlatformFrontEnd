import React, { useState } from "react";
import Header from "../../Header.jsx";
import ProfileSection from "../ProfileSection/ProfileSection.jsx";
import StatusSection from "../StatusSection/StatusSection.jsx";
import BalanceSection from "../BalanceSection/BalanceSection.jsx";
import HistorySection from "../HistorySection/HistorySection.jsx";
import ReferralSection from "../ReferalSection/ReferalSection.jsx";
import SettingsModal from "../ProfileModal/SettingsModal.jsx";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <Header />
            <main className={styles.accountPage}>
                <ProfileSection onOpenSettings={openModal} />
                <StatusSection />
                <BalanceSection />
                <HistorySection />
                <ReferralSection />
                <SettingsModal isOpen={isModalOpen} onClose={closeModal} />
            </main>
        </div>
    );
};

export default ProfilePage;
