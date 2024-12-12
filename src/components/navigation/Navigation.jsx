import React from "react";
import './Navigation.css'
import {LinksData} from './LinksData.js'
import { Link } from "react-router";

const Navigation = () => {
    return (
        <header>
            <div className="logo">Dead PackMan</div>
            <nav>
                {LinksData.map((link) => (
                    <Link to={link.path} key={link.path}>{link.name}</Link>
                ))}
            </nav>
            <div className="header-icons">
                <a href="#" className="account">My Account</a>
                <a href="#" className="cart">🛒</a>
            </div>
        </header>
    )
}

export default Navigation;