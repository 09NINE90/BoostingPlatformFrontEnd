import React from "react";
import styles from "./SupportInstructions.module.css";

const SupportInstructions = () => {
    return (
        <section className={styles.supportInstructions}>
            <h2>How to Fill an Appeal</h2>
            <p>
                Make sure that your request has serious weight. Describe in detail the essence of your question
                (order number, game, service name) - you will be answered as soon as possible. If you are sure
                that the essence of your question can be solved here and now, contact the support staff in live chat.
            </p>
        </section>
    );
};

export default SupportInstructions;
