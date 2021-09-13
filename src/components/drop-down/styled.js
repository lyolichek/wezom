import styled from 'styled-components';

export const StyledContainer = styled.div`
    position: relative;
    margin: 0;
`;

export const StyledHeader = styled.header`
    color: rgba(0,0,0,.65);
    transition: color .3s;
    cursor: pointer;
    
    &:hover {
        color: #1890ff;
    }
`;

export const StyledListContainer = styled.div``;

export const StyledList = styled.ul`
    position: absolute;
    right: 0;
    top: 3rem;
    min-width: 25.6rem;
    margin: 0;
    background: #ffffff;
    box-shadow: 0 0 1rem 0 rgb(51 51 51 / 33%);
`;

export const StyledListItem = styled.li`
    list-style: none;
    transition: color .3s;
    color: rgba(0,0,0,.65);
    cursor: pointer;
    padding: 0 1.6rem;
    height: 3.2rem;
    line-height: 3.2rem;
    
    &:hover {
        color: #1890ff;
    }
    
    & + li {
        border-top: 0.1rem solid rgba(0,0,0,0.1);
    }
`;
