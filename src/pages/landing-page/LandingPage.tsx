import React, { useState } from 'react';
import matta from './icons/matta.png';
import unicorn from './icons/unicorn.svg';
import headingLogo from './icons/camp-hortenfestival.svg';
import './landing-page.css';
import confetti from 'canvas-confetti';

const LandingPage = () => {
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const onMouseMove = (event: any) => {
        setMousePosition({ x: event.pageX, y: event.pageY });
    };

    const screenWidth =
        document && document.getElementById('root') && document.getElementById('root')!.offsetWidth;
    const screenHeight =
        document && document.getElementById('root') && document.getElementById('root')!.offsetHeight;

    const xPosition = mousePosition.x;
    const yPosition = mousePosition.y;

    const launceConfetti = () => {
        confetti({
            origin: {
                x: screenWidth ? xPosition / screenWidth : 0,
                y: screenHeight ? yPosition / screenHeight : 0,
            },
        });
    };

    return (
        <div className="app" onMouseMove={onMouseMove} onClick={launceConfetti}>
            <header className="appHeader">
                <img src={matta} className="spinningUser" alt="logo" />
            </header>
            <img src={unicorn} className="unicorn" alt="unicorn" style={{ left: xPosition, top: yPosition }} />
            <div className="headingLogoContainer">
                <img src={headingLogo} />
            </div>
            <p className="festivalDates">18. - 21. juni</p>
        </div>
    );
};

export default LandingPage;
