import React, { useState } from 'react';
import matta from './icons/matta.png';
import unicorn from './icons/unicorn.svg';
import headingLogo from './icons/camp-hortenfestival.svg';
import './landing-page.css';
import confetti from 'canvas-confetti';
import classNames from 'classnames';

const LandingPage = () => {
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const onMouseMove = (event: any) => {
        setMousePosition({ x: event.pageX, y: event.pageY });
    };

    const isTochDevice = 'ontouchstart' in window;

    const screenWidth =
        document && document.getElementById('root') && document.getElementById('root')!.offsetWidth;
    const screenHeight =
        document && document.getElementById('root') && document.getElementById('root')!.offsetHeight;

    const xPosition = mousePosition.x;
    const yPosition = mousePosition.y;

    const launceConfetti = () => {
        confetti({
            origin: {
                x: screenWidth && !isTochDevice ? xPosition / screenWidth : Math.random(),
                y: screenHeight && !isTochDevice ? yPosition / screenHeight : Math.random(),
            },
        });
    };

    return (
        <div className="app" onMouseMove={onMouseMove} onClick={launceConfetti}>
            <header className="appHeader">
                <img src={matta} className="spinningUser" alt="logo" />
            </header>

            <img
                src={unicorn}
                className={classNames('unicorn', isTochDevice && 'unicornMobile')}
                alt="unicorn"
                style={{ left: isTochDevice ? -130 : xPosition, top: isTochDevice ? 50 : yPosition }}
            />

            <div className="headingLogoContainer">
                <img src={headingLogo} alt="camp-hortenfestival-logo" />
            </div>
            <p className="festivalDates">18. - 21. juni</p>
        </div>
    );
};

export default LandingPage;
