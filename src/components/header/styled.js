import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: sticky;
    flex-shrink: 0;
    top: 0;
    z-index: 100;
    padding: 0.1rem 2vw;
    background-color: #fff;
    box-shadow: 0 0 1rem 0 rgb(51 51 51 / 33%);
    
    .navigation__authorization {
        margin: 0 0 0 auto;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    height: 6rem;
    max-width: 158rem;
    margin: 0 auto;
`;

export const StyledNavBar = styled.nav`
    margin: 0 auto 0 0;
    
    .item {
        display: inline-block;
        margin: 0 0.8rem;
        color: #1890ff;
        text-decoration: none;
        outline: none;
        transition: color .3s;
        
        &.is-active {
            color: rgba(0,0,0,.65);
            pointer-events: none;
        }
    }
`;

export const StyledButton = styled.nav`
    display: inline-block;
    font-size: 1.6rem;
    cursor: pointer;
    background: none;
    border: none;
    color: #1890ff;
    height: 3.2rem;
    padding: 0.4rem 1.5rem;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
`;
