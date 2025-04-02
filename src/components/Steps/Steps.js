import React, { useState, useEffect } from 'react';
import './Steps.css';

const Steps = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (showPopup) {
            document.body.classList.add('popup-open');
        } else {
            document.body.classList.remove('popup-open');
        }
    }, [showPopup]);

    const handleClick = (event) => {
        event.preventDefault();
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="steps">
            <div className="step-item active">
                <span className="step-number">01</span>
                <span className="step-dot">.</span>
                <a href="https://code.moncler.com/login" className="plain-link">Login/Register</a>
            </div>
            <div className="step-item" onClick={handleClick}>
                <span className="step-number">02</span>
                <span className="step-dot">.</span>
                <span className="step-text">Select label</span>
            </div>
            <div className="step-item" onClick={handleClick}>
                <span className="step-number">03</span>
                <span className="step-dot">.</span>
                <span className="step-text">Insert Code</span>
            </div>
            <div className="step-item" onClick={handleClick}>
                <span className="step-number">04</span>
                <span className="step-dot">.</span>
                <span className="step-text">Your Product</span>
            </div>
            <div className="step-item" onClick={handleClick}>
                <span className="step-number">05</span>
                <span className="step-dot">.</span>
                <span className="step-text">Thank You</span>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <div className="popup-content">
                            <button className="close-button" onClick={closePopup}>×</button>
                            <p className="popup-title">Oops, you skipped a step.</p>
                            <p className="popup-message">Before we proceed, please complete the <br></br> below/above to continue.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Steps;
