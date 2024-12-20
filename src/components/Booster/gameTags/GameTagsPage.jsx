import React from "react";
import Header from "../Header.jsx";
import GameTagsList from "./GameTagsList/GameTagsList.jsx";
import GameTagsForm from "./gameTagsForm/GameTagsForm.jsx";
import styles from "./GameTagsPage.module.css";

const GameTagsPage = () => {
    const games = ["VALORANT", "DESTINY 2", "WOW", "CALL OF DUTY"];

    return (
        <div>
            <Header />
            <main className={styles.gameTagsPage}>
                <div className={styles.gameTagsContainer}>
                    <GameTagsList games={games} />
                    <GameTagsForm />
                </div>
            </main>
        </div>
    );
};

export default GameTagsPage;
