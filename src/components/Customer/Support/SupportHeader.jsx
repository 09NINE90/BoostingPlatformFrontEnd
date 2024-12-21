import React from "react";
import styles from "./SupportHeader.module.css";

const SupportHeader = () => {
    return (
        <section className={styles.supportHeader}>
            <h1>
                Our Support <span className={styles.highlight}>Online 24/7</span> - Feel Free to Ask Any Questions
            </h1>
        </section>
    );
};

export default SupportHeader;
