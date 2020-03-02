import React from 'react';
import matta from './icons/matta.png';
import headingLogo from './icons/camp-hortenfestival.svg';
import './landing-page.css';

const LandingPage = () => (
    <div className="app">
        <header className="appHeader">
            <img src={matta} className="spinningUser" alt="logo" />
        </header>
        <div className="headingLogoContainer">
            <img src={headingLogo} />
        </div>
        <p className="festivalDates">18. - 21. juni</p>
    </div>
);

export default LandingPage;
