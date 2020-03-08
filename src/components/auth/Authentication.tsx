import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

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
        measurementId: 'G-TC8JQDP77T',
    };

    firebase.initializeApp(firebaseConfig);
}

interface Authentication {
    user: firebase.User | null;
    isLoading: boolean;
    signOut: () => Promise<void>;
}

const AuthenticationContext = createContext<Authentication | null>(null);

const AuthenticationProvider: React.FC = ({ children }) => {
    const [authentication, setAuthentication] = useState<Authentication>({
        user: firebase.auth().currentUser,
        isLoading: true,
        signOut: () => firebase.auth().signOut(),
    });

    useEffect(() => {
        firebase.auth().onAuthStateChanged(newUser => {
            setAuthentication({
                ...authentication,
                user: newUser,
                isLoading: false,
            });
        });
    }, [authentication]);

    return <AuthenticationContext.Provider value={authentication}>{children}</AuthenticationContext.Provider>;
};

export const useAuthentication = (): Authentication => {
    const authentication = useContext(AuthenticationContext);
    if (!authentication) {
        throw new Error('useAuthentication can only be used within an AuthenticationProvider');
    }
    return authentication;
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
