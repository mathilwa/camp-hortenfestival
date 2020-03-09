import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { HashRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import UserInformation from './pages/user-information/UserInformation';
import Login from './pages/login/Login';
import LandingPageWrapper from './pages/landing-page/LandingPageWrapper';

ReactDOM.render(
    <HashRouter>
        <Route exact path="/" component={LandingPageWrapper} />
        <Route path="/camp-hortenfestival" component={LandingPageWrapper} />
        <Route path="/deg" component={UserInformation} />
        <Route path="/login" component={Login} />
    </HashRouter>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
