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
                                    <span id="pripol_footer_privacy">Privacy Policy</span>
                                </span>
                                <span className="privacy-footer-label">
                                    <span id="pripol_footer_cookie">Cookie Policy</span>
                                </span>
                                <span className="privacy-footer-label">
                                    <span id="pripol_footer_settings_cookie">Cookie settings</span>
                                </span>
                            </div>
                            <div id="lang_sel" data-lang="US">
                                <div className="lang-title">LANGUAGE</div>
                                <a href="locale/US" className="active">English</a>
                                <a href="locale/IT">Italiano</a>
                                <a href="locale/JP">日本語</a>
                                <a href="https://code.moncler.cn/locale/CN">中文</a>
                                <a href="locale/KR">한국어</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer; 