import React, { useEffect, useState } from 'react';
import nemanja from './icons/nemanja.png';
import petter from './icons/petter.png';
import theass from './icons/theass.png';
import theahj from './icons/theahj.png';
import emilie from './icons/emilie.png';
import nicolai from './icons/nicolai.png';
import kristian from './icons/kristian.png';
import hege from './icons/hege.png';
import matta from './icons/matta.png';
import marlin from './icons/marlin.png';
import css from './folka.less';
import App from '../../components/app/App';
import 'firebase/firestore';
import firebase from 'firebase';
import { useUserDatabase } from '../../components/auth/Authentication';

interface Festivalmenneske {
    name: string;
    icon: string;
    favSong: string;
    info: string;
}

const getIcon = (iconDescriptionForUser: string) => {
    const allIcons = [nemanja, kristian, nicolai, petter, emilie, theahj, theass, marlin, matta, hege];
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
                    favSong: festivalUser.favSong,
                    icon: getIcon(festivalUser.icon),
                    info: festivalUser.info,
                });
            });

            setFolka(liste);
        };
        getUsers();
    }, [database]);

    return (
        <App>
            <div className={css.folkaContainer}>
                {folka.map(folk => (
                    <div className={css.folkInfo}>
                        <img src={folk.icon} className={css.spinningUser} alt="logo" />
                        <div className={css.fakta}>
                            <div className={css.name}>{folk.name}</div>
                            <span>{folk.info}</span>
                        </div>
                    </div>
                ))}
            </div>
        </App>
    );
};

export default Folka;
