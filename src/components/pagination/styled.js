import styled from 'styled-components';

export const StyledPagination = styled.div`
    text-align: right;
    padding: 2rem 0;
`;

export const StyledButton = styled.button`
    border: none;
    background: transparent;
    display: inline-block;
    padding: 0 0.6rem;
    color: rgba(0,0,0,.65);
    cursor: pointer;
    
    & + {
        margin: 0 0 0 0.8rem;
    }
`;
