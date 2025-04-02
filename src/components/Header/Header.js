import React from 'react';
import './Header.css';
import logo from '../../img/README.png';

const Header = () => {
    return (
        <header className="main-header">
            <a href="https://www.moncler.com/en-it/" target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="Moncler Logo" className="header-logo" />
            </a>
            <h1 className="header-title">CODE MONCLER</h1>
        </header>
    );
};

export default Header;

