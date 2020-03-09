import React from 'react';
import { useAuthentication, withAuthentication } from '../../components/auth/Authentication';
import { withRouter, useHistory } from 'react-router-dom';
import LandingPage from './LandingPage';
import Spinner from '../../components/spinner/Spinner';
import { RouteName } from '../../index';

const LandingPageWrapper: React.FC = () => {
    const { user, isLoading } = useAuthentication();

    const history = useHistory();

    if (isLoading) {
        return <Spinner />;
    }

    if (user) {
        const userprofile = user!.providerData[0];

        if (!userprofile!.displayName) {
            history.push(RouteName.Deg);
        }
    }

    return <LandingPage />;
};

export default withRouter(withAuthentication(LandingPageWrapper));
