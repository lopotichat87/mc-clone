import React from 'react';
import Header from './Header/Header';
import Steps from './Steps/Steps';
import Authenticity from './Authenticity/Authenticity';
import Footer from './Footer/Footer';
import './MainContent.css';
import heroDesktop from '../img/Hero_banner_desk-b727a89d.jpg';
import heroMobile from '../img/Hero_banner_mob-24890a22 copie.jpg';

const MainContent = () => {
    return (
        <>
            <Header />
            <main className="main-content">
                <div className="hero-banner">
                    <img
                        src={heroDesktop}
                        alt="Moncler Hero Banner Desktop"
                        className="hero-banner-desktop"
                    />
                    <img
                        src={heroMobile}
                        alt="Moncler Hero Banner Mobile"
                        className="hero-banner-mobile"
                    />
                </div>
                <div className="content-container">
                    <Steps />
                    <Authenticity />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default MainContent;
