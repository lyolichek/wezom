import React from 'react';
import { useUser } from '../../hooks/useUser';
import { ITEMS_ON_PAGE } from '../../constants/general';
import { StyledPagination, StyledButton } from './styled';

export const Pagination = ({setState}) => {
    const { userData } = useUser();
    const data = userData.contacts;

    const onPageChanged = (index) => {
        const results = data.slice((index * ITEMS_ON_PAGE), (index * ITEMS_ON_PAGE) + ITEMS_ON_PAGE);
        setState(results);
    };

    return (
        <StyledPagination>
            {
                [...Array(Math.ceil(data.length / ITEMS_ON_PAGE)).keys()].map(item => {
                    return (
                        <StyledButton key={item} onClick={() => onPageChanged(item)}>{item + 1}</StyledButton>
                    );
                })
            }
        </StyledPagination>
    )
};
