import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Input from '../input/Input';
import InputForm from '../input-form/InputForm';
import css from './user-information.less';

interface Props {
    user: firebase.User;
}

const UserInformation: React.FC<Props> = ({ user }) => {
    const [name, setName] = useState<string>('');
    const updateUser = async () => {
        await user.updateProfile({
            displayName: name,
        });
    };

    return (
        <div className={css.container}>
            <div className={css.headingContainer}>
                <h1 className={css.heading}>Du! Ja du, ja.</h1>
                <p>Du må fylle ut litt informasjon om deg selv</p>
            </div>
            <InputForm onSubmit={updateUser} buttonLabel="Nok om meg">
                <Input
                    onChange={event => setName(event.target.value)}
                    placeholder="Hva heter du a?"
                    value={name}
                />
            </InputForm>
        </div>
    );
};

export default UserInformation;
