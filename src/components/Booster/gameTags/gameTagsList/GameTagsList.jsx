import React from "react";
import styles from "./GameTagsList.module.css";

const GameTagsList = ({ games }) => {
    return (
        <div className={styles.gameTagsList}>
            <h3>Game Tags</h3>
            <ul>
                {games.map((game, index) => (
                    <li key={index}>
                        <button className={styles.gameTag}>{game}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameTagsList;
