import React from 'react';
import { StyledSelect } from './styled';

export const Select = ({data}) => {
    return (
        <StyledSelect>
            {data.map((item, i) => {
                return (
                    <option key={i}>{item.gender}</option>
                )
            })}
        </StyledSelect>
    )
};
