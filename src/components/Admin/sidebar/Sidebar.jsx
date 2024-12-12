import { SidebarLinkData } from "./SidebarLinkData.js";
import { Link } from "react-router-dom"; // Updated for react-router-dom compatibility
import "./sidebar.module.css"; // Updated to use CSS modules

import styles from "./sidebar.module.css";

const Sidebar = () => (
    <aside className={styles.sidebar}>
        <nav className={styles.navLinks}>
            {SidebarLinkData.map((link) => (
                <Link to={link.path} key={link.path} className={styles.sidebarLink}>
                    {link.name}
                </Link>
            ))}
        </nav>
    </aside>
);

export default Sidebar;