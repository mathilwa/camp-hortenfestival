import React, { FormEvent, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import css from './login.less';
import Input from '../input/Input';
import Logo from '../logo/Logo';
import InputForm from '../input-form/InputForm';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const isValidInput = email && password;

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (isValidInput) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch((error: firebase.auth.Error) => {
                    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                        setErrorMessage('E-posten og passordet matcher ikke.');
                    } else {
                        setErrorMessage('Her gikk noe galt. Prøv igjen eller ta kontakt med support.');
                    }
                });
        }
    };

    return (
        <div className={css.container}>
            <Logo />
            <InputForm onSubmit={handleSubmit} errorMessage={errorMessage} buttonLabel="Here I come!">
                <Input
                    value={email}
                    placeholder="Hva er mailen din a?"
                    onChange={event => setEmail(event.target.value)}
                    type="email"
                />
                <Input
                    value={password}
                    placeholder="Passord"
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                />
            </InputForm>
        </div>
    );
};

export default Login;
