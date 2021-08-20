import React from 'react';
import './fee-text.styles.css';

export const FeeDisplay = ({fee}) => (
    <div className="expected_fee">
        Monthly fee of £{ fee }
    </div>
);