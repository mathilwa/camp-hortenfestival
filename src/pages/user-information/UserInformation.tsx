import React, { useState } from 'react';
import 'firebase/auth';
import Input from '../../components/input/Input';
import InputForm from '../../components/input-form/InputForm';
import css from './user-information.less';
import { useAuthentication, withAuthentication } from '../../components/auth/Authentication';
import { useHistory } from 'react-router-dom';
import { RouteName } from '../../index';

const UserInformation: React.FC = () => {
    const { user } = useAuthentication();
    const history = useHistory();
    const [name, setName] = useState<string>(
        user && user.providerData[0] && user.providerData[0].displayName ? user.providerData[0].displayName : '',
    );

    const updateUser = async () => {
        await user!.updateProfile({
            displayName: name,
        });

        history.push(RouteName.Hjem);
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

export default withAuthentication(UserInformation);
