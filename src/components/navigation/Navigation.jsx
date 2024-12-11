import React from "react";
import {Link} from "react-router-dom";
import './Navigation.css'

export default function Navigation() {
    return (
        <header>
            <div className="logo">Dead PackMan</div>
            <nav>
                <ul className="nav-links">
                    <NavItem link = "/" name = "Home"/>
                    <NavItem link = "/" name = "Services"/>
                    <NavItem link = "/" name = "Support"/>
                    <NavItem link = "/LoginForm" name = "LoginPage"/>
                </ul>
            </nav>
            <div className="header-icons">
                <a href="#" className="account">My Account</a>
                <a href="#" className="cart">🛒</a>
            </div>
        </header>
    )
}

function NavItem(props) {
    return (
        <li>
            <Link to={props.link}>{props.name}</Link>
        </li>
    )
}