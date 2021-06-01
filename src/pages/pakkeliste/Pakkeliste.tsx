import React from 'react';

import App from '../../components/app/App';

import css from './pakkeliste.less';
import { withRouter } from 'react-router';
import { withAuthentication } from '../../components/auth/Authentication';

const Pakkeliste = () => (
    <App>
        <div className={css.pakkeliste}>
            <div className={css.taMedContainer}>
                <div className={css.pakkelisteHeading}>TA MED</div>
                <div className={css.taMed}>
                    <div>Badetøy</div>
                    <div>Solbriller</div>
                    <div>Toalettsaker</div>
                    <div>Sommerklær</div>
                    <div>Noe fargerikt!</div>
                    <div>Varme klær til kvelden</div>
                    <div>Sko det er lett å ta av og på</div>
                    <div>Klær du kan bevege deg i</div>
                    <div>Noen sko du kan være litt aktiv i</div>
                    <div>Hårføner? (Jeg har én)</div>
                </div>
            </div>
            <div className={css.ikkeTaMedContainer}>
                <div className={css.pakkelisteHeading}>IKKE TA MED</div>
                <div className={css.ikkeTaMed}>
                    <div>Mat</div>
                    <div>Drikke</div>
                    <div>Antibac</div>
                    <div>Solkrem</div>
                    <div>Håndklær</div>
                    <div>Sengetøy</div>
                    <div>Rettetang</div>
                    <div>Shampoo og balsam</div>
                    <div>Lommepenger</div>
                    <div>Noe å sove på</div>
                </div>
            </div>
        </div>
    </App>
);

export default withRouter(withAuthentication(Pakkeliste));
