import React from 'react';
import nemanja from './icons/nemanja.png';
import petter from './icons/petter.png';
import theass from './icons/theass.png';
import theahj from './icons/theahj.png';
import emilie from './icons/emilie.png';
import nicolai from './icons/nicolai.png';
import kristian from './icons/kristian.png';
import hege from './icons/hege.png';
import matta from './icons/matta.png';
import marlin from './icons/marlin.png';
import camphorten from './icons/ch.png';
import unicorn from './icons/unicorn.svg';
import css from './menu.less';

import { useHistory } from 'react-router-dom';
import { RouteName } from '../../index';
import { LoggedInUser } from '../auth/Authentication';

interface Props {
    loggedInUser?: LoggedInUser;
}

const Menu: React.FC<Props> = ({ loggedInUser }) => {
    const history = useHistory();

    const icons = [matta, nemanja, petter, theass, theahj, emilie, nicolai, kristian, hege, marlin];
    const iconForLoggedInUser = loggedInUser ? icons.find(icon => icon.includes(loggedInUser.icon)) : null;

    return (
        <header className={css.appHeader}>
            <div className={css.menuHeading} onClick={() => history.push(RouteName.Hjem)}>
                <img className={css.menuLogo} src={unicorn} alt="hjem" />
                <span className={css.festivalName}>CAMP HORTENFESTIVAL</span>
                <span className={css.festivalDates}>29. JUNI - 3. JULI 2022</span>
            </div>
            {loggedInUser && (
                <div className={css.menuUserInformation} onClick={() => history.push(RouteName.Deg)}>
                    <p className={css.userName}>{loggedInUser.name ? `Hei, ${loggedInUser.name}!` : 'Hei!'} </p>
                    <img
                        src={iconForLoggedInUser ? iconForLoggedInUser : camphorten}
                        className={css.spinningUser}
                        alt="logo"
                    />
                </div>
            )}
        </header>
    );
};

export default Menu;
