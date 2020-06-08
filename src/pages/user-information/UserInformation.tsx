import React, { useEffect, useState } from 'react';
import 'firebase/auth';
import Input from '../../components/input/Input';
import InputForm from '../../components/input-form/InputForm';
import css from './user-information.less';
import { useAuthentication, withAuthentication, useUserDatabase } from '../../components/auth/Authentication';
import { useHistory } from 'react-router-dom';
import { RouteName } from '../../index';
import Menu from '../../components/menu/Menu';
import App from '../../components/app/App';

const UserInformation: React.FC = () => {
    const { authenticatedUser, loggedInUser } = useAuthentication();

    // @ts-ignore
    const { database } = useUserDatabase();
    const history = useHistory();
    const [name, setName] = useState<string>('');

    useEffect(() => {
        setName(loggedInUser.name);
    }, [loggedInUser]);

    const updateUser = async () => {
        database
            .doc(name)
            .set(authenticatedUser!.uid)
            .data({ name });

        history.push(RouteName.Hjem);
    };

    return (
        <App>
            <Menu loggedInUser={loggedInUser} />
            <div className={css.headingContainer}>
                <h1 className={css.heading}>Du! Ja du, ja.</h1>
                <p>Vil du endre noe info om deg sjæl? Kjør på!</p>
            </div>
            <div className={css.inputContainer}>
                <InputForm onSubmit={updateUser} buttonLabel="Nok om meg">
                    <Input
                        onChange={event => setName(event.target.value)}
                        placeholder="Hva heter du a?"
                        value={name}
                    />
                </InputForm>
            </div>
        </App>
    );
};

export default withAuthentication(UserInformation);
