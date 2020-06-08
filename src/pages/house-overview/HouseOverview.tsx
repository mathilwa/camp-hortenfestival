import React from 'react';
import 'firebase/auth';

import css from './house-overview.less';
import { useAuthentication, withAuthentication } from '../../components/auth/Authentication';

import andreEtasje from './icons/andre-etasje.svg';
import forsteEtasje from './icons/forste-etasje.svg';
import romfordelingLogo from './icons/romfordeling-logo.svg';
import Menu from '../../components/menu/Menu';
import App from '../../components/app/App';

const HouseOverview: React.FC = () => {
    const { loggedInUser } = useAuthentication();

    return (
        <App>
            <Menu loggedInUser={loggedInUser} />
            <div className={css.romoversikt}>
                <div className={css.romfordelingHeading}>
                    <img src={romfordelingLogo} alt="romfordeling-logo" />
                </div>
                <img className={css.etasje} src={forsteEtasje} alt="forste-etasje" />
                <img className={css.etasje} src={andreEtasje} alt="andre-etasje" />
            </div>
        </App>
    );
};

export default withAuthentication(HouseOverview);
