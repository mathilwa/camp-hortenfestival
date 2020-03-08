import React from 'react';
import css from './input.less';

interface Props {
    placeholder: string;
    value: string;
    onChange: (event: any) => void;
    type?: string;
}

const Input: React.FC<Props> = ({ placeholder, value, onChange, type = 'text' }) => (
    <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={event => onChange(event)}
        className={css.input}
    />
);

export default Input;
