import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'

const menuList = [
    { name: "start", path: "/", exact: true },
    { name: "produkty", path: "/products" },
    { name: "kontakt", path: "/contact" },
    { name: "panel admina", path: "/admin" },
]

const Navigation = () => {
    const menu = menuList.map(item => (
        <li key={item.name}>
            <NavLink exact={item.exact ? item.exact : false} to={item.path}>{item.name}</NavLink>
        </li>
    ))

    return (
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>

    );
}

export default Navigation;