import React from 'react';

import App from '../../components/app/App';

import css from './practical-information.less';
import { withRouter } from 'react-router';
import { withAuthentication } from '../../components/auth/Authentication';
import classNames from 'classnames';

const PracticalInformation = () => (
    <App>
        <div className={css.container}>
            <div className={css.heading}>LITT PRAKTISK INFORMASJON</div>

            <div className={css.infoBlock}>
                <div className={css.title}>Ting å huske på før festivalen</div>
                <ul className={css.info}>
                    <li>Sjekk pakkelista</li>
                    <li>
                        Legg til favorittsangen din i{' '}
                        <a
                            href="https://open.spotify.com/playlist/0QcXkE0QPo9tbc8Rt8RM1w?si=GXuylaifSiOQtx1evy45hQ"
                            className={css.spesiallenke}
                        >
                            spillelista
                        </a>{' '}
                        til festivalen
                    </li>
                    <li>Hør med deg selv og sjekk om det er noe du kunne tenkt deg å underholde/bidra med</li>
                    <li>
                        Sjekk{' '}
                        <a
                            href="https://docs.google.com/spreadsheets/d/1aM8ULu5PQ-kY2asRTJJrluwhf8cCY4ceqUGAygSlrJw/edit?usp=sharing"
                            className={css.spesiallenke}
                        >
                            mat og drikke-oversikten
                        </a>{' '}
                        om du har fått med deg din favorittnæring
                    </li>
                    <li>Si fra når og hvordan du kommer deg til festivalen</li>
                </ul>
            </div>

            <div className={css.infoBlock}>
                <div className={css.title}>Hvor finner man festivalen?</div>
                <div className={css.info}>
                    <a href="https://goo.gl/maps/QWvm61hJY1xQsnN57">Falkenstensveien, 255, 3189 Horten</a>
                </div>
            </div>

            <div className={css.infoBlock}>
                <div className={css.title}>Hvordan komme seg hit?</div>
                <div className={css.transportInfo}>
                    <div className={css.heading}>
                        <span className={css.emoji}>🚂</span>Tog:
                    </div>
                    <div className={css.info}>
                        Med toget tar et ca. 1 time å komme seg fra Oslo til Skoppum, som er stasjonen nærmest
                        Horten. Gi meg beskjed om/når du kommer med tog, så fikser jeg transport til
                        festivalområdet.
                    </div>
                </div>
                <div className={css.transportInfo}>
                    <div className={css.heading}>
                        <span className={css.emoji}>🚌</span> Buss:
                    </div>
                    <div className={css.info}>
                        Vy kjører også buss fra Oslo som tar deg fra Oslo bussterminal Kopstadkrysset på ca. 1
                        time. Dette er stoppestedet nærmest Horten, og hvis du gir meg en lyd så fikser jeg også
                        her transport til festivalen.
                    </div>
                </div>
                <div className={css.transportInfo}>
                    <div className={css.heading}>
                        <span className={css.emoji}>🚗</span>Bil:
                    </div>
                    <div className={css.info}>
                        Det er ikke lange eller vanskelige veien å ta seg fra Oslo til Horten, nærmere bestemt
                        Falkensten, med bil. Reiseruten er som følger: Fra Oslo finner du E18 i retning Drammen, og
                        ligger her i en liten time. Etter å ha passert Holmestrand nærmer du deg avkjøringen til
                        Horten. Du skal ta av ved avkjøring 33, mot Horten (rv 310). Herfra følger du veien mot
                        Horten i ca. 5 minutter, før du kommer til Falkensten. Etter å ha passert en slette med
                        åker og sjø på venstre hånd kommer du til et skilt som peker til høyre opp til Skavli. Her
                        skal du av! Men sving av sakte, for du skal ta en rolig U-sving rett opp på sykkelstien og
                        kjøre i retningen du kom fra. Følg sykkelstien ca 100 meter før du svinger til venstre opp
                        i den første oppkjørselen du kommer til. Dette bør være ved et lysegult hus, og stemning
                        bør være til å ta og føle på! Velkommen!
                    </div>
                    <div className={css.transportInfo}>
                        <div className={css.heading}>
                            <span className={css.emoji}>🚗 + ⛵️</span>Bil + båt:
                        </div>
                        <div className={css.info}>
                            Det er også mulig å komme seg til Horten via Moss og Bastøferga. Det er kortere å kjøre
                            til Moss, men fergeturen tar ca. 30 minutter, i tillegg til eventuell ventetid.
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.infoBlock}>
                <div className={css.title}>Mat og drikke</div>
                <div className={css.info}>
                    Jeg kjøper inn alt av mat og drikke før festivalen, alt du trenger å gjøre er å fylle inn
                    ønskene dine i{' '}
                    <a
                        href="https://docs.google.com/spreadsheets/d/1aM8ULu5PQ-kY2asRTJJrluwhf8cCY4ceqUGAygSlrJw/edit?usp=sharing"
                        className={css.spesiallenke}
                    >
                        mat og drikke-oversikten
                    </a>
                    . Om du kommer på noe du vil ha etter tirsdag 16. juni - gi meg en beskjed! (Eller bare fiks
                    det sjæl).
                </div>
            </div>

            <div className={css.infoBlock}>
                <div className={css.title}>Fest nå? Jammen, det er jo Korona?</div>
                <div className={classNames(css.info, css.koronaintro)}>
                    Det stemmer, det er Korona, så det må vi også ta hensyn til. Derfor kommer det en liten liste
                    med ting vi bør tenke på:
                </div>
                <ul className={css.info}>
                    <li>Selv om det er kjipt, sjekk formen og vær ærlig med deg selv før du kommer</li>
                    <li>Prøv å holde avstand</li>
                    <li>Ikke drikke av hverandres glass</li>
                    <li>Ingen klining</li>
                    <li>Ikke masse klemming</li>
                    <li>Host i abluen</li>
                    <li>Vask hendene godt</li>
                    <li>Bruk antibac</li>
                    <li>Siden vi er Bekkere - ta hjemmekontor mandag og tirsdag om du har mulighet for det</li>
                </ul>
            </div>
        </div>
    </App>
);

export default withRouter(withAuthentication(PracticalInformation));
