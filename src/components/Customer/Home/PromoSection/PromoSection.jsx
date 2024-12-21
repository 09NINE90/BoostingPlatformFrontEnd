import React from "react";
import styles from "./PromoSection.module.css";

const PromoSection = () => {
    return (
        <section className={styles.promo}>
            <div className={styles.promoLeft}>
                <h3>THE FINAL SHAPE IS ALREADY HERE!</h3>
                <p>
                    Be the first who will defeat the main boss of the Destiny Universe!<br />
                    Buy <strong>Salvation’s Edge Day One</strong> and get a chance to obtain a new Exotic Rifle!<br />
                    Get ready Guardians!
                </p>
            </div>
            <div className={styles.promoCenter}>
                <img src="/vite.svg" alt="The Final Shape Promo" />
            </div>
            <div className={styles.promoRight}>
                <h3>BUY MORE - PAY LESS!</h3>
                <p>
                    The more you work with us, the more discounts you get!<br />
                    After spending <strong>$500</strong>, you get a <strong>5% discount forever!</strong><br />
                    More information in your personal account!
                </p>
            </div>
        </section>
    );
};

export default PromoSection;
