import React from 'react';
import css from './landing-page.less';
import { withAuthentication } from '../../components/auth/Authentication';
import { useHistory, withRouter } from 'react-router-dom';
import App from '../../components/app/App';
import classNames from 'classnames';
import { RouteName } from '../../index';

const LandingPage = () => {
    const history = useHistory();

    return (
        <App>
            <div className={css.menuBlocks}>
                <div
                    className={classNames(css.menuBlock, css.folka)}
                    onClick={() => history.push(RouteName.Folka)}
                >
                    FOLKA
                </div>
                <div
                    className={classNames(css.menuBlock, css.pakkeListe)}
                    onClick={() => history.push(RouteName.TaMed)}
                >
                    PAKKELISTE
                </div>
                <div
                    className={classNames(css.menuBlock, css.houseOverview)}
                    onClick={() => history.push(RouteName.Huset)}
                >
                    HUSET
                </div>

                <div
                    className={classNames(css.menuBlock, css.practicalInfo)}
                    onClick={() => history.push(RouteName.PraktiskInfo)}
                >
                    PRAKTISK INFO
                </div>
            </div>
        </App>
    );
};

export default withRouter(withAuthentication(LandingPage));
