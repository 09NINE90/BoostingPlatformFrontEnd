import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";
import ServiceSection from "../section/ServiceSection.jsx";
import styles from "./AServicesPage.module.css";

const AServicesPage = () => {
    console.log("AServicesPage rendered");
    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.container}>
                <Sidebar active="services" />
                <ServiceSection />
            </div>
        </div>
    );
};

export default AServicesPage;