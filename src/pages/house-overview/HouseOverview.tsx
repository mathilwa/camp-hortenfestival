import React from 'react';
import 'firebase/auth';

import css from './house-overview.less';
import { withAuthentication } from '../../components/auth/Authentication';

import andreEtasje from './icons/andre-etasje.svg';
import forsteEtasje from './icons/forste-etasje.svg';
import romfordelingLogo from './icons/romfordeling-logo.svg';
import App from '../../components/app/App';
import InfoBlock from '../../components/info-block/InfoBlock';

const HouseOverview: React.FC = () => (
    <App>
        <div className={css.husInfo}>
            <InfoBlock title="Inngang">
                Det er kodelås på døra, og den kan låse seg med jevne mellomrom. Koden til døra er{' '}
                <strong>390150</strong>, 39 for Skur39 og 0150 fordi det er postkoden til Skuret.
            </InfoBlock>

            <InfoBlock title="Internett">
                Bruk nettet <strong>sf255</strong> eller <strong>sf255_5G</strong>. Passordet er{' '}
                <strong>GladeJolHeilage2412</strong>.
            </InfoBlock>

            <InfoBlock title="Dusj og toalett">
                Det er tre "bad" i huset, ett oppe med dusj og toalett, et nede med dusj og toalett, og et siste
                med kun toalett (vaskerommet). Huset holder ikke på verdens største varmtvannstank, så tenk på de
                andre og dusj litt kortere enn du kanskje vanligvis gjør. Såpe, shampoo og balsam finnes i begge
                dusjene.{' '}
            </InfoBlock>

            <InfoBlock title="Søppel">
                På festivalen sorterer vi søppel i papp/papir, plast, glass, matavfall og restavfall. Sorteringen
                skjer i hovedsak på kjøkkenet, og når det blir fullt der kan søpla tømmes i søppelkassene står i
                oppkjørselen.
            </InfoBlock>

            <InfoBlock title="Dyr">
                Det vil være flere dyr tilstede under festival. Det er tre kaniner (<strong>Nora</strong>,{' '}
                <strong>Vilde</strong> og <strong>Glenn-Isak</strong>) i et bur under verandaen, og en katt (
                <strong>Einar</strong>) som kommer til å være sammen med oss hele tiden. Einar bor også inne, så
                hvis det er noen med allergier så kan det være lurt å ta med medisin for dette.
                <br />
                <br />
                Einar har forresten aldri vært på festival før, så ta godt imot ham!
            </InfoBlock>

            <InfoBlock title="Hjemmekontor">
                Det vil være mulighet for å ta hjemmekontor på Camp Horten torsdag og fredag hvis det er ønskelig.
                De vanlige "kontorplassene" vil være omgjort til soverom under festivalen, men vi finner alltids
                plass! Og internett har man jo, så det løser seg.
            </InfoBlock>
        </div>

        <div className={css.romoversikt}>
            <div className={css.romfordelingHeading}>
                <img src={romfordelingLogo} alt="romfordeling-logo" />
            </div>
            <img className={css.etasje} src={forsteEtasje} alt="forste-etasje" />
            <img className={css.etasje} src={andreEtasje} alt="andre-etasje" />
        </div>
    </App>
);

export default withAuthentication(HouseOverview);
