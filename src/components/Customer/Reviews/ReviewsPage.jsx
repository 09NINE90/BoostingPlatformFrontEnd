import React from "react";
import TrustSection from "./TrustSection";
import LiveReviews from "./LiveReviews";
import styles from "./ReviewsPage.module.css";

const ReviewsPage = () => {
    return (
        <main className={styles.reviewsPage}>
            <TrustSection />
            <LiveReviews />
        </main>
    );
};

export default ReviewsPage;
