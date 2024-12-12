import React, { useState, useEffect } from "react";
import { promoList } from './HomeData';
import Promo from './Promo.jsx';
import axios from 'axios';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
            <main>
                <section className={styles.promo}>
                    <Promo className={styles.promoLeft} {...promoList[0]} />
                    <div className={styles.promoCenter}>
                        <img
                            src="https://steamuserimages-a.akamaihd.net/ugc/2496760306132372866/2C8FCB0E50B6D92EB5AF3CED3D67A8A006C89E41/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                            alt="The Final Shape Promo"
                        />
                    </div>
                    <Promo className={styles.promoRight} {...promoList[1]} />
                    <button onClick={logout} className={styles.logoutBtn}>Logout</button>
                </section>
            </main>
        </>
    );
};

const logout = async () => {
    try {
        const response = await axios.post('http://localhost/api/auth/logout', {}, { withCredentials: true });
    } catch (err) {
        console.error('Failed to logout:', err);
    }
};

export default HomePage;