import React, { FormEvent } from 'react';
import './input-form.css';

interface Props {
    onSubmit: (event: FormEvent) => void;
    errorMessage?: string;
    buttonLabel: string;
}

const InputForm: React.FC<Props> = ({ onSubmit, errorMessage, buttonLabel, children }) => (
    <form onSubmit={onSubmit} className="login-form">
        <div className="input-container">
            {children}
            {errorMessage && <span>{errorMessage}</span>}
        </div>

        <button type="submit" className="login-button">
            <span>{buttonLabel}</span>
        </button>
    </form>
);

export default InputForm;
