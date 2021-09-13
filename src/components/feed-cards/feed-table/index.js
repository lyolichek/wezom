import React, { useState } from 'react';
import { useUser } from '../../../hooks/useUser';
import { Filter } from '../../filter';
import { Pagination } from '../../pagination';
import { Statistics } from '../../statistics';
import { ITEMS_ON_PAGE } from '../../../constants/general';
import {
    StyledTable,
    StyledLink,
    StyledCountry,
    StyledState
} from './styled';

export const FeedTable = () => {
    const { userData } = useUser();
    const data = userData.contacts;
    const [state, setState] = useState(data.length > ITEMS_ON_PAGE ? data.slice(0, ITEMS_ON_PAGE) : data);

    return (
        <section>
            <Filter setState={setState}/>
            <StyledTable>
                <thead></thead>
                <tbody>
                {state.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>
                                <img src={item.picture.large} alt={`${item.name.first} ${item.name.last}`} />
                            </td>
                            <td>{`${item.name.title}. ${item.name.first} ${item.name.last}`}</td>
                            <td>{item.dob.date}
                                {` (${item.dob.age} years)`} </td>
                            <td><StyledLink href={`mailto:${item.email}`}>{item.email}</StyledLink></td>
                            <td><StyledLink href={`tell:+${item.phone}`}>{item.phone}</StyledLink></td>
                            <td><StyledCountry>{`/${item.location.country}/`}</StyledCountry> {`${item.location.city} ${item.location.street.name} ${item.location.street.number}`}</td>
                            <td><StyledState>{item.location.state}</StyledState></td>
                        </tr>
                    );
                })}

                </tbody>
            </StyledTable>

            <Statistics state={state} />

            <Pagination setState={setState} />
        </section>
    );
};
