import React from "react";
// import Header from "../Header";
// import Sidebar from "../Sidebar";
import ProfileSection from "../section/ProfileSection.jsx";
import styles from "./profile.module.css";

const ProfilePage = () => {
    return (
        <div>
            {/*<Header />*/}
            <main className={styles.moderatorDashboard}>
                {/*<Sidebar />*/}
                <ProfileSection />
            </main>
        </div>
    );
};

export default ProfilePage;
