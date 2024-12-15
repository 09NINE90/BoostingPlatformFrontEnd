import React, { useState, useEffect } from "react";
import styles from "./StatisticsSection.module.css";

const StatisticsSection = () => {
    const [selectedGame, setSelectedGame] = useState("valorant");

    const gameStats = {
        valorant: { created: 50, inProgress: 30, completed: 120, canceled: 10 },
        wow: { created: 40, inProgress: 25, completed: 100, canceled: 15 },
        cod: { created: 35, inProgress: 20, completed: 80, canceled: 10 },
        destiny: { created: 20, inProgress: 15, completed: 60, canceled: 5 },
    };

    const [currentGameStats, setCurrentGameStats] = useState(gameStats.valorant);

    useEffect(() => {
        setCurrentGameStats(gameStats[selectedGame]);
    }, [selectedGame]);

    return (
        <section className={styles.statisticsSection}>
            <h2>Statistics</h2>
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <h3>Total Revenue</h3>
                    <p>$<span>100,000</span></p>
                </div>
                <div className={styles.statCard}>
                    <h3>Total Payouts</h3>
                    <p>$<span>50,000</span></p>
                </div>
                <div className={styles.statCard}>
                    <h3>Platform Profit</h3>
                    <p>$<span>50,000</span></p>
                </div>
            </div>

            <h3>Orders Statistics</h3>
            <div className={styles.ordersStats}>
                <div className={styles.ordersByGame}>
                    <h4>Orders by Game</h4>
                    <select
                        className={styles.dropdown}
                        value={selectedGame}
                        onChange={(e) => setSelectedGame(e.target.value)}
                    >
                        <option value="valorant">Valorant</option>
                        <option value="wow">World of Warcraft</option>
                        <option value="cod">Call of Duty</option>
                        <option value="destiny">Destiny 2</option>
                    </select>
                    <ul className={styles.gameStatsList}>
                        <li>Created: <span>{currentGameStats.created}</span></li>
                        <li>In Progress: <span>{currentGameStats.inProgress}</span></li>
                        <li>Completed: <span>{currentGameStats.completed}</span></li>
                        <li>Canceled: <span>{currentGameStats.canceled}</span></li>
                    </ul>
                </div>

                <div className={styles.ordersStatus}>
                    <h4>Orders by Status</h4>
                    <ul>
                        <li>Created: <span>1,000</span></li>
                        <li>In Progress: <span>500</span></li>
                        <li>Completed: <span>500</span></li>
                        <li>Canceled: <span>0</span></li>
                    </ul>
                </div>
            </div>

            <h3>User Statistics</h3>
            <div className={styles.userStats}>
                <div className={styles.userRole}>
                    <h4>Customers</h4>
                    <p><span>1,000</span></p>
                </div>
                <div className={styles.userRole}>
                    <h4>Boosters</h4>
                    <p><span>50</span></p>
                </div>
                <div className={styles.userRole}>
                    <h4>Moderators</h4>
                    <p><span>20</span></p>
                </div>
                <div className={styles.userRole}>
                    <h4>Admins</h4>
                    <p><span>2</span></p>
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;
