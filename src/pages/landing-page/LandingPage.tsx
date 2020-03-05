import React, { useState } from 'react';
import matta from './icons/matta.png';
import unicorn from './icons/unicorn.svg';
import headingLogo from './icons/camp-hortenfestival.svg';
import './landing-page.css';
import confetti from 'canvas-confetti';
import classNames from 'classnames';
import andreEtasje from '../../components/romoversikt/icons/andre-etasje.svg';
import forsteEtasje from '../../components/romoversikt/icons/forste-etasje.svg';
import romfordelingLogo from '../../components/romoversikt/icons/romfordeling-logo.svg';

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
            <header className="app-header">
                <img src={matta} className="spinning-user" alt="logo" />
            </header>

            <div className="landing-page-top">
                <img
                    src={unicorn}
                    className={classNames('unicorn', isTochDevice && 'unicorn-mobile')}
                    alt="unicorn"
                    style={{ left: isTochDevice ? -130 : xPosition, top: isTochDevice ? 50 : yPosition }}
                />

                <div className="heading-logo-container">
                    <img src={headingLogo} alt="camp-hortenfestival-logo" />
                </div>
                <p className="festival-dates">18. - 21. juni</p>
            </div>
            <div className="romoversikt">
                <div className="romfordeling-heading">
                    <img src={romfordelingLogo} alt="romfordeling-logo" />
                </div>
                <img className="etasje" src={forsteEtasje} alt="forste-etasje" />
                <img className="etasje" src={andreEtasje} alt="andre-etasje" />
            </div>
        </div>
    );
};

export default LandingPage;
