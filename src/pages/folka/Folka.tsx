import React, { useEffect, useState } from 'react';
import nemanja from './icons/nemanja.png';
import theass from './icons/theass.png';
import theahj from './icons/theahj.png';
import emilie from './icons/emilie.png';
import nicolai from './icons/nicolai.png';
import kristian from './icons/kristian.png';
import hege from './icons/hege.png';
import matta from './icons/matta.png';
import marlin from './icons/marlin.png';
import vetle from './icons/vetle.png';
import petter from './icons/petter.png';
import aurora from './icons/aurora.png';
import css from './folka.less';
import App from '../../components/app/App';
import 'firebase/firestore';
import firebase from 'firebase';
import { useUserDatabase } from '../../components/auth/Authentication';

interface Festivalmenneske {
    name: string;
    icon: string;
    info: string;
}

const getIcon = (iconDescriptionForUser: string) => {
    const allIcons = [
        nemanja,
        kristian,
        nicolai,
        emilie,
        theahj,
        theass,
        marlin,
        matta,
        hege,
        vetle,
        petter,
        aurora,
    ];
    const userIcon = allIcons.find(icon => icon.includes(iconDescriptionForUser));
    return userIcon ? userIcon : '';
};

const Folka: React.FC = () => {
    //  @ts-ignore
    const { database } = useUserDatabase();
    const [folka, setFolka] = useState<Festivalmenneske[]>([]);
    useEffect(() => {
        const getUsers = async () => {
            const users = await firebase
                .firestore()
                .collection('users')
                .get();

            const liste: Festivalmenneske[] = [];

            users.forEach(user => {
                const festivalUser = user.data();
                liste.push({
                    name: festivalUser.name,
                    icon: getIcon(festivalUser.icon),
                    info: festivalUser.info,
                });
            });

            setFolka(liste);
        };
        getUsers();
    }, [database]);

    const folkaSorted = folka.sort(
        (festivaldeltakerA, festivaldeltakerB) => festivaldeltakerB.info.length - festivaldeltakerA.info.length,
    );

    return (
        <App>
            <div className={css.folkaContainer}>
                {folkaSorted.map(festivaldeltaker => (
                    <div className={css.folkInfoContainer}>
                        <img src={festivaldeltaker.icon} className={css.spinningUser} alt="logo" />
                        <div className={css.fakta}>
                            <div className={css.name}>{festivaldeltaker.name}</div>
                            <div className={css.info}>{festivaldeltaker.info}</div>
                        </div>
                    </div>
                ))}
            </div>
        </App>
    );
};

export default Folka;
