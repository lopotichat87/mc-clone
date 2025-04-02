import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div id="container">
            <footer id="footer">
                <div className="_table">
                    <div className="_cell">
                        <div className="wrp-inner-footer">
                            <div className="footer-info">
                                <span className="titlewebsite">THE MONCLER GROUP</span>
                                <span className="line-separeted">-</span>
                                <span className="address-website">Via Stendhal 47, 20144 Milano</span>
                                <span className="privacy-footer-label">
                                    <a href="https://www.moncler.com/fr-fr/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                                        <span id="pripol_footer_privacy">Politique de confidentialité</span>
                                    </a>
                                </span>
                                <span className="privacy-footer-label">
                                    <a href="https://www.moncler.com/fr-fr/legal/cookie-policy" target="_blank" rel="noopener noreferrer">
                                        <span id="pripol_footer_cookie">Politique des cookies</span>
                                    </a>
                                </span>
                                <span className="privacy-footer-label">
                                    <a href="https://www.moncler.com/fr-fr/legal/cookie-settings" target="_blank" rel="noopener noreferrer">
                                        <span id="pripol_footer_settings_cookie">Paramètres des cookies</span>
                                    </a>
                                </span>
                            </div>
                            <div id="lang_sel" data-lang="FR">
                                <div className="lang-title">LANGUE</div>
                                <a href="https://www.moncler.com/fr-fr" className="active">Français</a>
                                <a href="https://www.moncler.com/en-us">English</a>
                                <a href="https://www.moncler.com/it-it">Italiano</a>
                                <a href="https://www.moncler.com/jp-ja">日本語</a>
                                <a href="https://www.moncler.com/cn-zh">中文</a>
                                <a href="https://www.moncler.com/kr-ko">한국어</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer; 
