import {NavLink } from 'react-router-dom';
import PropTypes from "prop-types"; // Для типов пропсов
import styles from "./Sidebar.module.css"; // Подключаем стили
import SidebarData  from "./SidebarData.js";

const Sidebar = ({ active }) => {
    return (
        <>
            <aside className={styles.sidebar}>
                <ul>
                    {SidebarData.map((item) => (
                        <li
                            key={item.name}
                            className={item.path === active ? styles.active : ""}
                        >
                            <NavLink to={item.path}>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
};

Sidebar.propTypes = {
    active: PropTypes.string.isRequired, // Тип для пропса active
};

export default Sidebar;