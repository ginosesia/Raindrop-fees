import React from 'react';
import './input-box.styles.css';

export const InputBox = ({ placeholder, handleChange }) => (
    <input
        className='fee_value'
        type='text'
        placeholder={placeholder}
        onChange={handleChange}
    />
);