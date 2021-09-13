import styled from 'styled-components';

export const StyledContacts = styled.section`
    width: 100%;
    max-width: 158rem;
`;

export const StyledHeader = styled.header`
    padding: 2rem 0 0;
    display: flex;
    justify-content: space-between;
`;

export const StyledButtonContainer = styled.header`
    display: flex;
`;

export const StyledBody = styled.div``;

export const StyledButton = styled.button`
    border: none;
    background: transparent;
    margin: 0 0 0 1.6rem;
    cursor: pointer;
    color: rgba(0,0,0,0.65);
    
    &:hover {
        color: #1890ff;
    }
`;
