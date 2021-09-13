import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNotFound } from './styled';

export const NotFound = () => {
    return (
        <StyledNotFound className="error">
            <div className="error__code">404</div>
            <h2 className="error__message">Requested page not found!</h2>
            <Link className="error__button" to={'/'} exact>Back to home</Link>
        </StyledNotFound>
    )
};
