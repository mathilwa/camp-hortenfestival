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
import unicorn from './icons/unicorn.svg';
import css from './menu.less';

import { useHistory } from 'react-router-dom';
import { RouteName } from '../../index';
import { LoggedInUser } from '../auth/Authentication';

interface Props {
    loggedInUser: LoggedInUser;
}

const Menu: React.FC<Props> = ({ loggedInUser }) => {
    const history = useHistory();

    const icons = [matta, nemanja, petter, theass, theahj, emilie, nicolai, kristian, hege, marlin];
    const iconForLoggedInUser = icons.find(icon => icon.includes(loggedInUser.icon));

    return (
        <header className={css.appHeader}>
            <img className={css.menuLogo} src={unicorn} alt="hjem" onClick={() => history.push(RouteName.Hjem)} />
            <div className={css.menuUserInformation} onClick={() => history.push(RouteName.Deg)}>
                <p className={css.userName}>{loggedInUser.name ? `Hei, ${loggedInUser.name}!` : 'Hei!'} </p>
                <img src={iconForLoggedInUser} className={css.spinningUser} alt="logo" />
            </div>
        </header>
    );
};

export default Menu;
