import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <img src={process.env.PUBLIC_URL + '/moncler-logo.png'} alt="Moncler Logo" className="logo" />
            <h1>CODE MONCLER</h1>
        </header>
    );
};

export default Header;
