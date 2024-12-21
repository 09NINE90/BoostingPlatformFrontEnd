import React from "react";
import ReviewCard from "./ReviewCard";
import styles from "./LiveReviews.module.css";

const reviews = [
    {
        avatar: "/vite.svg",
        name: "ZAZEK",
        service: "RANKED BOOST",
        time: "TODAY IN 12:34",
        comment: "MY BOOSTER IS VERY RESPECTFUL MAN!",
    },
    {
        avatar: "/vite.svg",
        name: "ZAZEK",
        service: "RANKED BOOST",
        time: "TODAY IN 12:34",
        comment: "MY BOOSTER IS VERY RESPECTFUL MAN!",
    },
    {
        avatar: "/vite.svg",
        name: "ZAZEK",
        service: "RANKED BOOST",
        time: "TODAY IN 12:34",
        comment: "MY BOOSTER IS VERY RESPECTFUL MAN!",
    },
];

const LiveReviews = () => {
    return (
        <section className={styles.liveReviews}>
            <h2>
                CHECK OURS <span className={styles.highlight}>LIVE</span>{" "}
                REVIEWS OR BE THE <span className={styles.highlight}>ONE</span>!
            </h2>
            <div className={styles.reviewCards}>
                {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </section>
    );
};

export default LiveReviews;
