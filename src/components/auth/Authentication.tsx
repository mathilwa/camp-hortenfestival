import React, { createContext, useContext, useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useHistory } from 'react-router';
import Spinner from '../spinner/Spinner';
import { RouteName } from '../../index';

const firebaseNotInitialized = firebase.apps.length === 0;
if (firebaseNotInitialized) {
    const firebaseConfig = {
        apiKey: 'AIzaSyAnkyD9_105zFHP4qanGUYdmynBHen65KM',
        authDomain: 'camp-hortenfestvial.firebaseapp.com',
        databaseURL: 'https://camp-hortenfestvial.firebaseio.com',
        projectId: 'camp-hortenfestvial',
        storageBucket: 'camp-hortenfestvial.appspot.com',
        messagingSenderId: '32123979841',
        appId: '1:32123979841:web:c321a59f4a94a047d19ec0',
    };

    firebase.initializeApp(firebaseConfig);
}

let database: firebase.firestore.Firestore | null;

interface Authentication {
    authenticatedUser: firebase.User | null;
    loggedInUser: LoggedInUser;
    isLoading: boolean;
    signOut: () => Promise<void>;
}

export interface LoggedInUser {
    name: string;
    icon: string;
    favSongTitle: string;
    favSongLink: string;
    info: string;
}

const AuthenticationContext = createContext<Authentication | null>(null);

const AuthenticationProvider: React.FC = ({ children }) => {
    const [authentication, setAuthentication] = useState<Authentication>({
        authenticatedUser: firebase.auth().currentUser,
        loggedInUser: { name: '', icon: '', favSongTitle: '', favSongLink: '', info: '' },
        isLoading: true,
        signOut: () => firebase.auth().signOut(),
    });

    const history = useHistory();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(newUser => {
            setAuthentication(prevAuth => ({
                ...prevAuth,
                authenticatedUser: newUser,
                isLoading: false,
            }));
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        if (!database) {
            database = firebase.firestore();
        }

        if (authentication.authenticatedUser) {
            database
                .collection('users')
                .doc(authentication.authenticatedUser.uid)
                .onSnapshot(doc => {
                    const user = doc.data() as LoggedInUser;
                    setAuthentication(prevState => ({ ...prevState, loggedInUser: user }));
                });
        }
    }, [authentication.authenticatedUser]);

    if (authentication.isLoading) {
        return <Spinner />;
    }

    if (!authentication.isLoading && !authentication.authenticatedUser) {
        history.push(RouteName.Login);
        return null;
    }

    return <AuthenticationContext.Provider value={authentication}>{children}</AuthenticationContext.Provider>;
};

export const useAuthentication = (): Authentication => {
    const authentication = useContext(AuthenticationContext);
    if (!authentication) {
        throw new Error('useAuthentication can only be used within an AuthenticationProvider');
    }
    return authentication;
};

export const useUserDatabase = (): firebase.firestore.CollectionReference<firebase.firestore.DocumentData> => {
    return firebase.firestore().collection('users');
};

export const withAuthentication = function withAuthenticationWrapper<T>(
    WrappedComponent: React.FC<T>,
): React.FC<T> {
    return (props: T) => (
        <AuthenticationProvider>
            <WrappedComponent {...props} />
        </AuthenticationProvider>
    );
};
