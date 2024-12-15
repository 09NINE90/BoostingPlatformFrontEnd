import React from "react";
import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";
import GameSection from "../gameSection/GameSection.jsx";

import styles from "./GamePage.module.css";

const GamePage = () => {
    console.log("GamePage rendered");
    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.container}>
                <Sidebar active="games" />
                <GameSection />
            </div>
        </div>
    );
};



export default GamePage;