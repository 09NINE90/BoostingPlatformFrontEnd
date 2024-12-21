import React from "react";
import GameCard from "../Card/ServicesCard.jsx";
import styles from "./ServicesGrid.module.css";

const gamesData = [
    { title: "Valorant", imageUrl: "/vite.svg", link: "/customer/pages/valorant.html" },
    { title: "Destiny 2", imageUrl: "/vite.svg", link: "/customer/pages/destiny2.html" },
    { title: "Call of Duty: Black Ops 6", imageUrl: "/vite.svg", link: "/customer/pages/cod-bo6.html" },
    { title: "World of Warcraft", imageUrl: "/vite.svg", link: "/customer/pages/wow.html" },
    { title: "Fortnite", imageUrl: "/vite.svg", link: "/customer/pages/fortnite.html" },
];

const GamesGrid = () => {
    return (
        <section className={styles.gamesGrid}>
            {gamesData.map((game, index) => (
                <GameCard key={index} {...game} />
            ))}
        </section>
    );
};

export default GamesGrid;
