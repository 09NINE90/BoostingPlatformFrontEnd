import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";
import GameSection from "../section/GameSection.jsx";

import styles from "./GamePage.module.css";

const AGamePage = () => {
    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.container}>
                <Sidebar active="games" />
                <GameSection />
            </div>
        </div>
    );
};

export default AGamePage;