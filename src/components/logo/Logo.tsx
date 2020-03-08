import headingLogo from './icons/camp-hortenfestival.svg';
import React from 'react';
import css from './logo.less';

const Logo = () => (
    <div className={css.headingLogoContainer}>
        <img src={headingLogo} alt="camp-hortenfestival-logo" />
    </div>
);

export default Logo;
