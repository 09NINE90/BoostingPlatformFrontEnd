
import React from "react";
import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";
import ReviewsSection from "../reviewsSection/ReviewSection.jsx";
import styles from "./ReviewPage.module.css";

const ReviewPage = () => {
    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.container}>
                <Sidebar active="reviews" />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default ReviewPage;
