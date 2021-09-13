import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../logo'
import { ModalForm } from '../modal-form';
import { useUser } from '../../hooks/useUser';
import { DropDown } from '../drop-down'
import { Popup } from '../popup'
import { StyledHeader, StyledContainer, StyledNavBar, StyledButton } from './styled';

export const Header = () => {
    const { userData } = useUser();
    const [ showPopup, setShowPopup ] = useState(false);
    const [ showLogoutPopup, setShowLogoutPopup ] = useState(false);

    const loginHandler = () => {
        setShowPopup(true);
    };

    const onPopupClose = useCallback(() => {
        setShowPopup(false);
    }, []);

    return (
        <>
            <StyledHeader className="navigation">
                <StyledContainer>
                    <Logo/>
                    <StyledNavBar>
                        <NavLink to={'/'} className={'item'} activeClassName={'is-active'} exact>Home</NavLink>
                        {userData.isLogged &&
                        <NavLink to={'/contacts'} className={'item'} activeClassName={'is-active'} exact>Contacts</NavLink>
                        }
                    </StyledNavBar>

                    {userData.isLogged ?
                        (
                            <DropDown setShowLogoutPopup={setShowLogoutPopup}/>
                        ) :
                        (
                            <StyledButton
                                type={'button'}
                                onClick={loginHandler}
                            >
                                Sign In
                            </StyledButton>
                        )}
                </StyledContainer>
            </StyledHeader>
            {showPopup && (
                <ModalForm onPopupClose={onPopupClose}/>
            )}
            {showLogoutPopup && (
                <Popup />
            )}
        </>
    )
};
