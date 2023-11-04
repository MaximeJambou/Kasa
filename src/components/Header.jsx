import React from 'react';
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className='logo'>
                <img src={logo} alt="Logo Kasa" />
            </div>
        </header>
    );
};


export default Header;