import React from 'react';

import App from '../../components/app/App';
import { useAuthentication, withAuthentication } from '../../components/auth/Authentication';
import Menu from '../../components/menu/Menu';
import css from './pakkeliste.less';
import { withRouter } from 'react-router';

const Pakkeliste = () => {
    const { loggedInUser } = useAuthentication();

    return (
        <App>
            <Menu loggedInUser={loggedInUser} />
            <div className={css.pakkeliste}>
                <div className={css.taMed}>

                    <div className={css.pakkelisteHeading}>TA MED</div>
                    <div>Klær</div>
                    <div>Ting</div>
                    <div>Bikini</div>
                </div>
                <div className={css.ikkeTaMed}>
                    <div className={css.pakkelisteHeading}>IKKE TA MED</div>
                    <div>Håndklær</div>
                    <div>Sengetøy</div>
                    <div>Mat</div>
                    <div>Drikke</div>
                </div>
            </div>
        </App>
    );
};

export default withRouter(withAuthentication(Pakkeliste));
