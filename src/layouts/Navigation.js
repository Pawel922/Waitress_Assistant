import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'

const list = [
    {name: "tables", path: "/", exact: true},
    {name: "menu", path: "/menu"},
    {name: "summary", path: "/summary"},
]

const Navigation = () => {
    const navList = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return (
        <nav>
            <ul>
               {navList}
            </ul>
        </nav>
    );
}

export default Navigation