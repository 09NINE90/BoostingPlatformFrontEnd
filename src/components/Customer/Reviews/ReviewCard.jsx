import React from "react";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({ avatar, name, service, time, comment }) => {
    return (
        <div className={styles.reviewCard}>
            <img src={avatar} alt={`${name}'s Avatar`} />
            <p>{name}</p>
            <p>{service}</p>
            <p>{time}</p>
            <button className={styles.reviewBtn}>{comment}</button>
        </div>
    );
};

export default ReviewCard;
