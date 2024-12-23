import { useState } from 'react';
import {NavLink, useNavigate } from 'react-router-dom';
import './Navigation.css';
import './DropdownMenu.css';
import {useSelector, useDispatch} from "react-redux";
import {clearAuth, selectAuth, setAuth, setRole} from "/src/store/slice/authSlice.js";
import {postLogout} from "../../api/authApi.jsx";
import {getAllGamesApi} from "../../api/gamesApi.jsx";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Navigation = () => {

    const isAuthenticated = useSelector(selectAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [games, setGames] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = async () => {
        const logout = await postLogout()

        if (logout) {
            dispatch(setRole(''));
            dispatch(setAuth(false))
            dispatch(clearAuth())
            navigate("/signInForm");
        }
    };

    const guestLinks = [
        {path: "/home", name: "Home"},
        {path: "/services", name: "Service"},
        {path: "/#", name: "Reviews"},
    ];

    const userLinks = [
        {path: "/home", name: "Home"},
        {path: "/services", name: "Service"},
    ];

    const fetchGames = async () => {
        try {
            const response = await getAllGamesApi();
            setGames(response); // Ожидается, что сервер возвращает массив игр
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
                                                    to={`/services`}
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
                <a href="#" className="cart" aria-label="Cart">
                    <ShoppingCartTwoToneIcon/>
                </a>
                <a href="#" className="account">My Account</a>
                {isAuthenticated ? (
                    <button onClick={handleLogout} className="logout-button"><LogoutIcon/></button>
                ) : (
                    <NavLink to="/signInForm"><LoginIcon/></NavLink>
                )}
            </div>
        </header>
    );
};

export default Navigation;
