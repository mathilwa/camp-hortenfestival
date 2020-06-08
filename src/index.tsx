import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { HashRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import UserInformation from './pages/user-information/UserInformation';
import Login from './pages/login/Login';
import LandingPage from './pages/landing-page/LandingPage';
import HouseOverview from './pages/house-overview/HouseOverview';
import Pakkeliste from './pages/Pakkeliste/Pakkeliste';

export enum RouteName {
    Hjem = '/',
    CampHortenFestival = '/camp-hortenfestival',
    Deg = '/deg',
    Login = '/login',
    Huset = '/huset',
    TaMed = '/ta-med',
}

ReactDOM.render(
    <HashRouter>
        <Route exact path={RouteName.Hjem} component={LandingPage} />
        <Route path={RouteName.CampHortenFestival} component={LandingPage} />
        <Route path={RouteName.Deg} component={UserInformation} />
        <Route path={RouteName.Login} component={Login} />
        <Route path={RouteName.Huset} component={HouseOverview} />
        <Route path={RouteName.TaMed} component={Pakkeliste} />
    </HashRouter>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
