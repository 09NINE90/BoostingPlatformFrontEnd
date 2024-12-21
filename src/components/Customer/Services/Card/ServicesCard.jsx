import React from "react";
import styles from "./ServicesCard.module.css";

const GameCard = ({ title, imageUrl, link }) => {
    return (
        <div className={styles.gameCard}>
            <a href={link}>
                <img src={imageUrl} alt={title} />
                <h3>{title}</h3>
            </a>
        </div>
    );
};

export default GameCard;
