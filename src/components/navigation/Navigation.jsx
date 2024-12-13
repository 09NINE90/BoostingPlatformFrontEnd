import { useState } from 'react';
import {NavLink, useNavigate } from 'react-router-dom';
import './Navigation.css';
import './DropdownMenu.css';
import {useSelector, useDispatch} from "react-redux";
import {logout, selectAuth} from "/src/store/authSlice.js";
import axios from 'axios'
const baseUrl = import.meta.env.VITE_API_BASE_URL;


const Navigation = () => {

    const isAuthenticated = useSelector(selectAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Состояние для хранения игр
    const [games, setGames] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout())
            .unwrap()
            .then(() => {
                console.log("Logged out successfully");
                navigate("/homePage");
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            });
    };

    const guestLinks = [
        {path: "/homePage", name: "Home"},
        {path: "/servicesPage", name: "Service"},
        {path: "/#", name: "Reviews"},
    ];

    const userLinks = [
        {path: "/homePage", name: "Home"},
        {path: "/servicesPage", name: "Service"},
    ];

    const fetchGames = async () => {
        try {
            const response = await axios.get(`${baseUrl}/games/getAllGames`, { withCredentials: true });
            setGames(response.data); // Ожидается, что сервер возвращает массив игр
        } catch (error) {
            console.error('Failed to fetch games:', error);
        }
    };

    // Показ выпадающего списка
    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
        if (games.length === 0) {
            fetchGames();
        }
    };

    // Скрытие выпадающего списка
    const handleMouseLeave = () => {
        setIsDropdownOpen(true);
    };

    const links = isAuthenticated ? userLinks : guestLinks;

    return (
        <header>
            <div className="logo">Dead PackMan</div>
            <nav className="nav-links">
                {links.map((link) => {
                    if (link.name === 'Service') {
                        return (
                            <div
                                key={link.path}
                                className="dropdown"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavLink
                                    to={link.path}
                                    className={({isActive}) => (isActive ? 'active-link' : '')}
                                >
                                    {link.name}
                                </NavLink>
                                {isDropdownOpen && (
                                    <div className="dropdown-menu">
                                        {games.length > 0 ? (
                                            games.map((game) => (
                                                <NavLink
                                                    key={game.id}
                                                    to={`/servicesPage`}
                                                    state={{ game }}
                                                    className="dropdown-item"
                                                >
                                                    {game.title}
                                                </NavLink>
                                            ))
                                        ) : (
                                            <p className="dropdown-item">Loading...</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    }

                    return (
                        <NavLink
                            to={link.path}
                            key={link.path}
                            className={({isActive}) => (isActive ? 'active-link' : '')}
                        >
                            {link.name}
                        </NavLink>
                    );
                })}
            </nav>

            <div className="header-icons">
                {isAuthenticated ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <NavLink to="/loginForm">Sign in</NavLink>
                )}
                <a href="#" className="account">My Account</a>
                <a href="#" className="cart" aria-label="Cart">
                    🛒
                </a>
            </div>
        </header>
    );
};

export default Navigation;
