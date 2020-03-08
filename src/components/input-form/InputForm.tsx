import React, { FormEvent } from 'react';
import css from './input-form.less';

interface Props {
    onSubmit: (event: FormEvent) => void;
    errorMessage?: string;
    buttonLabel: string;
}

const InputForm: React.FC<Props> = ({ onSubmit, errorMessage, buttonLabel, children }) => (
    <form onSubmit={onSubmit} className={css.loginForm}>
        <div className={css.inputContainer}>
            {children}
            {errorMessage && <span>{errorMessage}</span>}
        </div>

        <button type="submit" className={css.loginButton}>
            <span>{buttonLabel}</span>
        </button>
    </form>
);

export default InputForm;
