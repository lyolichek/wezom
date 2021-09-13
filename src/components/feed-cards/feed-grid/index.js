import React, { useState } from 'react';
import { useUser } from '../../../hooks/useUser';
import { Filter } from '../../filter';
import { Pagination } from '../../pagination';
import { Statistics } from '../../statistics';
import { ITEMS_ON_PAGE } from '../../../constants/general';
import {
    StyledGrid,
    StyledCard,
    StyledImageContainer,
    StyledContent,
    StyledName,
    StyledAge,
    StyledList,
    StyledItem,
    StyledItemLink,
    StyledCountry,
    StyledState
} from './styled';

export const FeedGrid = ( ) => {
    const { userData } = useUser();
    const data = userData.contacts;
    const [state, setState] = useState(data.length > ITEMS_ON_PAGE ? data.slice(0, ITEMS_ON_PAGE) : data);

    return (
        <section>
            <Filter setState={setState} />

            <StyledGrid>
                {state.map((item, i) => {
                    return (
                        <StyledCard key={i}>
                            <StyledImageContainer>
                                <img src={item.picture.large} alt={`${item.name.first} ${item.name.last}`} />
                            </StyledImageContainer>
                            <StyledContent>
                                <StyledName>{`${item.name.title}. ${item.name.first} ${item.name.last}`}
                                    <StyledAge>{` (${item.dob.age} years)`}</StyledAge>
                                </StyledName>
                                <StyledList>
                                    <StyledItem>
                                        <StyledItemLink href={`mailto:${item.email}`}>{item.email}</StyledItemLink>
                                    </StyledItem>
                                    <StyledItem>
                                        <StyledItemLink href={`tell:+${item.phone}`}>{item.phone}</StyledItemLink>
                                    </StyledItem>
                                    <StyledItem>
                                        <StyledCountry>{`/${item.location.country}/`}</StyledCountry>
                                        {`${item.location.city} ${item.location.street.name} ${item.location.street.number}`}
                                    </StyledItem>
                                </StyledList>
                                <StyledState>{item.location.state}</StyledState>
                            </StyledContent>
                        </StyledCard>
                    )
                })}
            </StyledGrid>

            <Statistics state={state} />

            <Pagination setState={setState} />
        </section>
    )
};
