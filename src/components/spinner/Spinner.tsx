import css from './spinner.less';
import unicornspinner from './icons/unicorn-spinner.svg';
import React from 'react';

const Spinner = () => {
    return (
        <div className={css.spinner}>
            <img src={unicornspinner} alt="spinning-unicorn" />
            <h1 className={css.spinnerTextContainer}>
                <span className={css.spinnerText}>Henter litt festivalstemning</span>
                <span className={css.dot}>.</span>
                <span className={css.dot}>.</span>
                <span className={css.dot}>.</span>
            </h1>
        </div>
    );
};

export default Spinner;
