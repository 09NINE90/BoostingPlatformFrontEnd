import React from "react";
import Navbar from "../../Navbar/Navbar.jsx";
import PromoSection from "../PromoSection/PromoSection.jsx";
import Footer from "../../Footer/Footer.jsx";
import styles from "./HomePage.module.css";

const App = () => {
    return (
        <>
            <div className={styles.homepage}>
                <Navbar />
                <main className={styles.mainContent}>
                    <PromoSection />
                </main>
                <Footer />
            </div>

        </>
    );
};

export default App;