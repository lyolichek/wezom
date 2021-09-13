import React, { useEffect, useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { api } from '../../api';
import { Title } from '../../components/title';
import { FeedCards } from '../../components/feed-cards';
import {
    StyledContacts,
    StyledHeader,
    StyledButtonContainer,
    StyledBody,
    StyledButton
} from './styled';

export const Contacts = () => {
    const [ isRow, setIsRow ] = useState(true);
    const {userData, addContacts} = useUser();

    useEffect(() => {
        const fetchData = async () => {
            const contacts = await api.contacts.get();
            addContacts(contacts.results);
        };
        fetchData();
    }, []);

    if (!userData.contacts) return null;

    return (
        <StyledContacts>
            <StyledHeader>
                <Title title={'Contacts'} />
                <StyledButtonContainer>
                    <div>
                        <StyledButton onClick={() => setIsRow(true)}>Row</StyledButton>
                        <StyledButton onClick={() => setIsRow(false)}>Grid</StyledButton>
                    </div>
                </StyledButtonContainer>
            </StyledHeader>
            <StyledBody>
                <FeedCards type={isRow ? 'row' : 'grid'} />
            </StyledBody>
        </StyledContacts>
    )
};
