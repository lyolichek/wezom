import React from 'react';
import { FeedGrid } from './feed-grid';
import { FeedTable } from './feed-table';
import { StyledCards } from './styled';

export const FeedCards = ({type}) => {
    return (
        <StyledCards>
            {type === 'row' ? <FeedTable/> : <FeedGrid/>}
        </StyledCards>
    )
};
