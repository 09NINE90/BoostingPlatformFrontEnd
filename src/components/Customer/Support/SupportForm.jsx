import React, { useState } from "react";
import styles from "./SupportForm.module.css";

const SupportForm = () => {
    const [isFormVisible, setFormVisible] = useState(true);

    const toggleFormVisibility = () => {
        setFormVisible(!isFormVisible);
    };

    return (
        <section className={styles.supportForm}>
            <div className={styles.formHeader}>
                <h2>Fill an Appeal</h2>
                <button className={styles.toggleFormBtn} onClick={toggleFormVisibility}>
                    {isFormVisible ? "Hide Form" : "Show Form"}
                </button>
            </div>
            {isFormVisible && (
                <form>
                    <input type="text" placeholder="What's Your Emergency?" className={styles.supportInput} />
                    <input type="text" placeholder="Order ID" className={styles.supportInput} />
                    <input type="text" placeholder="Game and Service Name" className={styles.supportInput} />
                    <textarea
                        placeholder="Describe Your Question in Details..."
                        className={styles.supportTextarea}
                    ></textarea>
                    <button type="submit" className={styles.submitBtn}>
                        Submit
                    </button>
                </form>
            )}
        </section>
    );
};

export default SupportForm;
