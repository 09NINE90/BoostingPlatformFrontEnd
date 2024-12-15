import React, { useState } from "react";
import ReviewItem from "../reviewsItem/ReviewsItem.jsx";
import ReviewModal from "../reviewsModal/ReviewModal.jsx";
import styles from "./ReviewSection.module.css";

const ReviewsSection = () => {
    const [reviews] = useState([
        {
            id: 1,
            userId: "#12345",
            boosterId: "#67890",
            orderId: "#56789",
            text: "Excellent booster, very professional!",
            editable: false,
        },
        {
            id: 2,
            userId: "#54321",
            boosterId: "#98765",
            orderId: "#43210",
            text: "Good experience overall, but some delays.",
            editable: false,
        },
    ]);

    const [selectedReview, setSelectedReview] = useState(null);

    const openModal = (review) => setSelectedReview({ ...review });
    const closeModal = () => setSelectedReview(null);

    const handleEdit = (newText) => {
        if (newText === null) {
            setSelectedReview((prev) => ({ ...prev, editable: true }));
        } else {
            setSelectedReview((prev) => ({ ...prev, text: newText, editable: true }));
        }
    };

    const handleApply = () => {
        console.log("Review applied:", selectedReview);
        closeModal();
    };

    const handleReject = () => {
        console.log("Review rejected:", selectedReview);
        closeModal();
    };

    return (
        <section className={styles.reviewsSection}>
            <div className={styles.reviewsList}>
                {reviews.map((review) => (
                    <ReviewItem
                        key={review.id}
                        review={review}
                        onSettingsClick={() => openModal(review)}
                    />
                ))}
            </div>
            {selectedReview && (
                <ReviewModal
                    isOpen={!!selectedReview}
                    review={selectedReview}
                    onClose={closeModal}
                    onEdit={handleEdit}
                    onApply={handleApply}
                    onReject={handleReject}
                />
            )}
        </section>
    );
};

export default ReviewsSection;
