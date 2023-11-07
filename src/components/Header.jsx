import React from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-container">
                <img src={logo} alt="Logo Kasa" className="header__logo" />
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink
                            to="/a-propos"
                            className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}
                        >
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
