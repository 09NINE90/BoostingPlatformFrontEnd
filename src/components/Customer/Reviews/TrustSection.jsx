import React from "react";
import styles from "./TrustSection.module.css";

const TrustSection = () => {
    return (
        <section className={styles.trustSection}>
            <h1>
                YOU CAN <span className={styles.highlight}>TRUST</span> US!
            </h1>
            <div className={styles.trustInfo}>
                <div className={styles.trustRating}>
                    <img src="/vite.svg" alt="TrustPilot Rating" />
                    <p>TrustPilot</p>
                    <p>2,000 Reviews</p>
                    <p>4.9/5.0 ★</p>
                </div>
                <div className={styles.trustDetails}>
                    <h2>WHY YOU SHOULD WORK WITH US?</h2>
                    <p>
                        FIRST OF ALL - WE HAVE BEEN ANALYZING THIS AREA FOR{" "}
                        <span className={styles.highlight}>3 YEARS</span>. WE
                        HAVE WORKED AS BOOSTERS OURSELVES AND UNDERSTAND WHAT
                        YOU NEED!
                    </p>
                    <p>
                        WE PROVIDE THE BEST CONDITIONS FOR BOOSTERS TO FOCUS ON
                        THEIR WORK, ENSURING YOU GET THE{" "}
                        <span className={styles.highlight}>
                            MAXIMUM LEVEL OF SERVICE
                        </span>
                        !
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
