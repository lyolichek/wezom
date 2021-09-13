import React from 'react';
import ReactLogo from '../../assets/images/react-logo.svg';
import { StyledHome } from './styled';

export const Home = () => {
    return (
        <StyledHome>
            <img className={'react-logo'} src={ReactLogo} alt="React Index"/>
        </StyledHome>
    )
};
