import React from 'react';
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

const Folka: React.FC = () => {
    const folka = [
        { name: 'Mathilde', icon: matta },
        { name: 'Nemanja', icon: nemanja },
        { name: 'Petter', icon: petter },
        { name: 'Thea', icon: theass },
        { name: 'Emilie', icon: emilie },
        { name: 'Nicolai', icon: nicolai },
        { name: 'Kristian', icon: kristian },
        { name: 'Hege', icon: hege },
        { name: 'Marlin', icon: marlin },
        { name: 'Thea', icon: theahj },
    ];

    return (
        <App>
            <div className={css.folkaContainer}>
                {folka.map(folk => (
                    <div className={css.folkInfo}>
                        <img src={folk.icon} className={css.spinningUser} alt="logo" />
                        <div className={css.fakta}>
                            <div className={css.name}>{folk.name}</div>
                            Dette er en lengre tekst om hver person. Om hvor de kommer fra. Hva de heter. Og en
                            liten liste med funfacts
                        </div>
                    </div>
                ))}
            </div>
        </App>
    );
};

export default Folka;
