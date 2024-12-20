import React from "react";
import styles from "./ReferalSection.module.css";

const ReferralSection = () => {
    return (
        <section className={styles.referralSection}>
            <h4>Earn More with Friends</h4>
            <p>
                <strong>What is Referral Program?</strong> Thanks to this program, you can bring friends to work with us! After your friend successfully completes 5 orders, you will both receive $30 to your balance.
            </p>
            <p>
                Your friend should click on the link and fill out the job application form. If everything goes well, you will both receive an email.
            </p>
            <button className={styles.referralBtn}>Get Referral Link &rarr;</button>
        </section>
    );
};

export default ReferralSection;
