import React from 'react';
import styles from "./Sidebar.module.css";
import {navigationLinks} from "../../../constants/constants.jsx";
import {NavLink} from "react-router-dom";

const Sidebar = () => {

    const [activeItem, setActiveItem] = React.useState('');

    return (
        <>
            <aside className={styles.sidebar}>
                <ul>
                    {navigationLinks.map((item) => (
                        <li
                            key={item.name}
                            className={item.name === activeItem && styles.active}
                            onClick={() => {
                                setActiveItem(item.name)
                            }}
                        >
                            <NavLink to={item.path}>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;