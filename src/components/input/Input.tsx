import React from 'react';
import './input.css';

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
        className="input"
    />
);

export default Input;
