import React from "react";
import { Link } from "react-router-dom"; // Используем Link для маршрутизации
import PropTypes from "prop-types"; // Для типов пропсов
import styles from "./Sidebar.module.css"; // Подключаем стили

const Sidebar = ({ active }) => {
    const menuItems = [
        { name: "Games", path: "/Admin/gamePage" },
        { name: "Orders", path: "/Admin/orderPage" },
        { name: "Sevices", path: "/Admin/servicePage" },
        { name: "Appeals", path: "/Admin/appealsPage" },
        { name: "Payouts", path: "/Admin/payoutsPage" },
        { name: "Users", path: "/Admin/usersPage" },
        { name: "Working Appeals", path: "/Admin/workingAppealsPage" },
        { name: "Statistics", path: "/Admin/statisticsPage" },
        { name: "Reviews", path: "/Admin/reviewsPage" },
        { name: "Live Chats", path: "/Admin/chatPage" }
    ];

    return (
        <>
            <aside className={styles.sidebar}>
                <ul>
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={item.path === active ? styles.active : ""}
                        >
                            <Link to={item.path}>{item.name}</Link>
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
