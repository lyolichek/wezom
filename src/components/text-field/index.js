import React from 'react';
import { StyledField } from './styled';

export const TextField = (props) => {
    const { type, name, onChange, value, placeholder } = props;

    return (
        <StyledField
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    )
};
