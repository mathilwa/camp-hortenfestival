import React from 'react';
import css from './landing-page.less';
import { useAuthentication, withAuthentication } from '../../components/auth/Authentication';
import Logo from '../../components/logo/Logo';
import { useHistory, withRouter } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import App from '../../components/app/App';
import classNames from 'classnames';
import { RouteName } from '../../index';

const LandingPage = () => {
    const history = useHistory();
    const { signOut, loggedInUser } = useAuthentication();

    const handleSignOut = () => {
        signOut().then(() => console.log('Du er logget ut'));
    };

    return (
        <App>
            <Menu loggedInUser={loggedInUser} />

            <div className={css.landingPageTop}>
                <Logo />
                <p className={css.festivalDates}>18. - 21. juni</p>
            </div>

            <div className={css.menuBlocks}>
                <div
                    className={classNames(css.menuBlock, css.houseOverview)}
                    onClick={() => history.push(RouteName.Huset)}
                >
                    HUSET
                </div>
                <div
                    className={classNames(css.menuBlock, css.pakkeListe)}
                    onClick={() => history.push(RouteName.TaMed)}
                >
                    PAKKELISTE
                </div>
            </div>

            <button onClick={handleSignOut}>Logg ut</button>
        </App>
    );
};

export default withRouter(withAuthentication(LandingPage));
