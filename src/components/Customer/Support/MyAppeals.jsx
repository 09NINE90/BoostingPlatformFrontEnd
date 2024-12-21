import React from "react";
import AppealItem from "./AppealItem";
import styles from "./MyAppeals.module.css";

const appeals = [
    { number: 12462, date: "20.11.2024", service: "BO6/Dark Matter", status: "Solved" },
    { number: 12463, date: "21.11.2024", service: "Destiny 2/Exotic", status: "In Progress" },
];

const MyAppeals = () => {
    return (
        <section className={styles.myAppeals}>
            <h2>My Appeals</h2>
            <div className={styles.appealsList}>
                {appeals.map((appeal, index) => (
                    <AppealItem key={index} {...appeal} />
                ))}
            </div>
        </section>
    );
};

export default MyAppeals;
