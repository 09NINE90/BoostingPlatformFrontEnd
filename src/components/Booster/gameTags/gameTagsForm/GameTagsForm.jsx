import React from "react";
import styles from "../gameTagsForm/GameTagsForm.module.css";

const GameTagsForm = () => {
    return (
        <div className={styles.gameTagsForm}>
            <form>
                <div className={styles.checkboxGroup}>
                    <label className={styles.customCheckbox}>
                        <input type="checkbox" name="pvp" />
                        <span>PVP</span>
                    </label>
                    <label className={styles.customCheckbox}>
                        <input type="checkbox" name="pve" />
                        <span>PVE</span>
                    </label>
                </div>
                <div className={styles.inputGroup}>
                    <div className={styles.inlineLabel}>
                        <label htmlFor="tracker">Tracker:</label>
                        <input id="tracker" type="text" placeholder="Enter tracker link" />
                    </div>
                    <div className={styles.inlineLabel}>
                        <label htmlFor="raid-report">Raid Report:</label>
                        <input id="raid-report" type="text" placeholder="Enter raid report link" />
                    </div>
                </div>
                <div className={styles.statusGroup}>
                    <span>Active: <strong>TRUE</strong></span>
                </div>
                <button type="submit" className={styles.submitBtn}>SEND</button>
            </form>
        </div>
    );
};

export default GameTagsForm;
