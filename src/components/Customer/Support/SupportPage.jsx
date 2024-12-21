import React from "react";
import SupportHeader from "./SupportHeader.jsx";
import SupportInstructions from "./SupportInstructions.jsx";
import SupportForm from "./SupportForm.jsx";
import MyAppeals from "./MyAppeals.jsx";
import styles from "./SupportPage.module.css";

const SupportPage = () => {
    return (
        <main className={styles.supportPage}>
            <SupportHeader />
            <SupportInstructions />
            <SupportForm />
            <MyAppeals />
        </main>
    );
};

export default SupportPage;
