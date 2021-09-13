import React from 'react';
import { NavLink } from 'react-router-dom';
import WezomLogo from '../../assets/images/wezom-logo.svg';
import { StyledLogo } from './styled';

export const Logo = () => {
    return (
        <StyledLogo>
            <NavLink to={'/'} className={'logo'} activeClassName={'is-active'} exact>
                <img className={'logo__img'} src={WezomLogo} alt={'Wezom'} />
            </NavLink>
        </StyledLogo>
    )
};
