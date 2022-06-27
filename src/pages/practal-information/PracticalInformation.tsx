import React from 'react';

import App from '../../components/app/App';

import css from './practical-information.less';
import { withAuthentication } from '../../components/auth/Authentication';
import classNames from 'classnames';
import InfoBlock from '../../components/info-block/InfoBlock';

const PracticalInformation = () => (
    <App>
        <div className={css.container}>
            <div className={css.heading}>LITT PRAKTISK INFORMASJON</div>

            <InfoBlock title="Ting å huske på før festivalen">
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
                    <li>
                        Om du har ønske om å bidra med noe til festivalen, stort eller smått, av
                        underholdning/oppgave/lek/aktivitet så er du hjertelig velkommen til det!
                    </li>
                    <li>
                        Om du har spesielle ønsker hva kommer til næring utover allergier, sjekk med Emilie om det
                        har kommet med på handlelista
                    </li>
                    <li>Si fra når og hvordan du kommer deg til festivalen</li>
                </ul>
            </InfoBlock>

            <InfoBlock title="Hvor finner man festivalen?">
                <a href="https://goo.gl/maps/QWvm61hJY1xQsnN57">Falkenstensveien, 255, 3189 Horten</a>
            </InfoBlock>

            <InfoBlock title="Hvordan komme seg hit?">
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
                        time. Dette er stoppestedet nærmest Horten, og hvis du gir meg en lyd så skal vi se om vi
                        får fikset transport til festivalområdet.
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
            </InfoBlock>
            <InfoBlock title="Mat og drikke">
                Det blir kjøpt inn alt av mat og drikke før festivalen, alt du trenger å gjøre er å komme og nyte
                det som blir servert! Om du har spesielle ønsker kan det sendes til Emilie eller meg! (Eller bare
                fiks det sjæl).
            </InfoBlock>

            <InfoBlock title="Ting å tenke på">
                <div className={classNames(css.info, css.koronaintro)}>
                    Camp Horten uten Korona - tenk så deilig! Nå kan vi klemme og danse og alt vi vil, men husk
                    likevel å ta vare på hverandre <span className={css.emoji}>🤗</span>
                    Jeg har likevel en liten liste å tenke på:
                </div>
                <ul className={css.info}>
                    <li>
                        Det er dyr på festivalområdet - 3 kaniner og én katt. Ta gjerne litt hensyn til disse!{' '}
                    </li>
                    <li>
                        Det er mye pollen i lufta om dagen, så hvis du reagerer på dette kan det være lurt å ta med
                        noe medisin. Det kommer til å være zyrtec og øyedråper tilgjengelig på festivalområdet.
                    </li>
                    <li>
                        Soundbox på full(!) styrke kan gjerne unngås. Spesielt på dagtid. Dette med hensyn til
                        naboer (som har fått nabovarsel - og ønsker oss en god fest - men likevel)
                    </li>
                    <li>
                        Pga kur skal jeg helst ikke klemmes akkurat når vi har festival (miip{' '}
                        <span className={css.emoji}>🥲</span>), men jeg albuer gjerne!
                    </li>
                    <li>Ikke sko inne</li>
                    <li>Tørk opp vann fra gulvene så vi ikke ødelegger parketten</li>
                    <li>Husk å glede dere!</li>
                </ul>
            </InfoBlock>
        </div>
    </App>
);

// @ts-ignore
export default withAuthentication(PracticalInformation);
