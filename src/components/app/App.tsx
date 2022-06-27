import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import css from './app.less';

import { useAuthentication, withAuthentication } from '../auth/Authentication';
import Spinner from '../spinner/Spinner';
import confetti from 'canvas-confetti';
import Menu from '../menu/Menu';

const App: React.FC = ({ children }) => {
    const { isLoading, loggedInUser } = useAuthentication();

    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    if (isLoading) {
        return <Spinner />;
    }

    const onMouseMove = (event: any) => {
        event.preventDefault();
        setMousePosition({ x: event.pageX, y: event.pageY });
    };

    const isTochDevice = 'ontouchstart' in window;

    const screenWidth =
        document && document.getElementById('root') && document.getElementById('root')!.offsetWidth;
    const screenHeight =
        document && document.getElementById('root') && document.getElementById('root')!.offsetHeight;

    const xPosition = mousePosition.x;
    const yPosition = mousePosition.y;

    const launceConfetti = () => {
        confetti({
            origin: {
                x: screenWidth && !isTochDevice ? xPosition / screenWidth : Math.random(),
                y: screenHeight && !isTochDevice ? yPosition / screenHeight : Math.random(),
            },
        });
    };

    return (
        <div className={css.app} onClick={launceConfetti} onMouseMove={onMouseMove}>
            <Menu loggedInUser={loggedInUser} />
            <div className={css.childrenContainer}>{children}</div>
        </div>
    );
};

// @ts-ignore
export default withRouter(withAuthentication(App));
