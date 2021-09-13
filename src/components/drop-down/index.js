import React, { useState } from 'react';
import { useRoute } from '../../hooks/useRoute';
import { useUser } from '../../hooks/useUser';
import {
    StyledContainer,
    StyledHeader,
    StyledListContainer,
    StyledList,
    StyledListItem,
} from './styled';

export const DropDown = (props) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const { userData, userLogout, updateIsLogged } = useUser();
    const routeTo = useRoute('/profile');

    const toggling = () => {
        setIsOpen(!isOpen);
    };

    const logoutHandler = () =>{
        userLogout();
        updateIsLogged(false);
        props.setShowLogoutPopup(true);
        setTimeout(() => {
            props.setShowLogoutPopup(false);
        }, 3000);
    };

    const routeToProfileHandler = () => {
        routeTo();
        setIsOpen(!isOpen);
    };

    if (!userData.profile) return null;

    const { name: { title, first, last } } = userData.profile;

    return (
        <StyledContainer>
            <StyledHeader onClick={toggling}>{`${title}. ${first} ${last}`}</StyledHeader>
            {isOpen && (
                <StyledListContainer>
                    <StyledList>
                        <StyledListItem onClick={routeToProfileHandler}>Profile</StyledListItem>
                        <StyledListItem onClick={logoutHandler}>Log Out</StyledListItem>
                    </StyledList>
                </StyledListContainer>
            )}
        </StyledContainer>
    )
};
