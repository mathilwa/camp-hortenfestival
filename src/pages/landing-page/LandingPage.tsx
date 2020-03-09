import React, { useState } from 'react';
import matta from './icons/matta.png';
import unicorn from './icons/unicorn.svg';
import css from './landing-page.less';
import confetti from 'canvas-confetti';
import classNames from 'classnames';
import andreEtasje from '../../components/romoversikt/icons/andre-etasje.svg';
import forsteEtasje from '../../components/romoversikt/icons/forste-etasje.svg';
import romfordelingLogo from '../../components/romoversikt/icons/romfordeling-logo.svg';
import { useAuthentication, withAuthentication } from '../../components/auth/Authentication';
import Logo from '../../components/logo/Logo';
import { withRouter, useHistory } from 'react-router-dom';
import { RouteName } from '../../index';

const LandingPage = () => {
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const { user, signOut } = useAuthentication();
    const history = useHistory();

    const onMouseMove = (event: any) => {
        event.preventDefault();
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

    const handleSignOut = () => {
        signOut().then(() => console.log('Du er logget ut'));
    };

    const userName = user && user.providerData[0] && user.providerData[0].displayName;

    return (
        <div className={css.app}>
            <header className={css.appHeader} onClick={() => history.push(RouteName.Deg)}>
                <p className={css.userName}>{userName ? `Hei, ${userName}!` : 'Hei!'} </p>
                <img src={matta} className={css.spinningUser} alt="logo" />
            </header>

            <div className={css.landingPageTop} onClick={launceConfetti} onMouseMove={onMouseMove}>
                <img
                    src={unicorn}
                    className={classNames(css.unicorn, { [css.unicornMobile]: isTochDevice })}
                    alt="unicorn"
                    style={{ left: isTochDevice ? -130 : xPosition, top: isTochDevice ? 50 : yPosition }}
                />

                <Logo />
                <p className={css.festivalDates}>18. - 21. juni</p>
            </div>
            <div className={css.romoversikt}>
                <div className={css.romfordelingHeading}>
                    <img src={romfordelingLogo} alt="romfordeling-logo" />
                </div>
                <img className={css.etasje} src={forsteEtasje} alt="forste-etasje" />
                <img className={css.etasje} src={andreEtasje} alt="andre-etasje" />
            </div>

            <button onClick={handleSignOut}>Logg ut</button>
        </div>
    );
};

export default withRouter(withAuthentication(LandingPage));
