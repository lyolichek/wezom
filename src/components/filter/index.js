import React from 'react';
import { useUser } from '../../hooks/useUser';
import { TextField } from '../text-field';
import { Select } from '../select';
import { ITEMS_ON_PAGE } from '../../constants/general';
import { StyledFilter } from './styled';

export const Filter = ({setState}) => {
    const { userData } = useUser();
    const data = userData.contacts;

    const filterByName = (e) => {
        const text = e.currentTarget.value;
        const filtered = data.filter(contact => {
            const { first, last } = contact.name;
            const name = ''.concat(first, ' ', last);
            return name.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
        setState(filtered.slice(0, ITEMS_ON_PAGE));
    };

    return (
        <StyledFilter>
            <TextField
                onChange={filterByName}
                type={'text'}
                name={'text'}
                placeholder={'Filter by name'}
            />
            <Select data={[{gender: 'male'}, {gender: 'female'}]} />
        </StyledFilter>
    )
};
