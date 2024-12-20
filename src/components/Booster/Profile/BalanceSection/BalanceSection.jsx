import React from "react";
import styles from "./BalanceSection.module.css";

const BalanceSection = () => {
    return (
        <section className={styles.balanceSection}>
            <h4>My Balance</h4>
            <div className={styles.balance}>
                <p>$<span>70</span></p>
                <button>Withdrawal</button>
            </div>
            <ul>
                <li><a href="#">How to get paid?</a></li>
                <li><a href="#">Payout methods</a></li>
            </ul>
        </section>
    );
};

export default BalanceSection;
