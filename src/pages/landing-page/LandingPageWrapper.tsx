import React from 'react';
import { useAuthentication, withAuthentication } from '../../components/auth/Authentication';
import { withRouter, useHistory } from 'react-router';
import LandingPage from './LandingPage';
import Spinner from '../../components/spinner/Spinner';

const LandingPageWrapper: React.FC = () => {
    const { user, isLoading } = useAuthentication();

    const history = useHistory();

    if (isLoading) {
        return <Spinner />;
    }

    if (user) {
        const userprofile = user!.providerData[0];

        if (!userprofile!.displayName) {
            history.push('deg');
        }
    }

    return <LandingPage />;
};

export default withRouter(withAuthentication(LandingPageWrapper));
