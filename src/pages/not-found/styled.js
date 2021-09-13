import styled from 'styled-components';

export const StyledNotFound = styled.section`
    position: relative;
    align-self: center;
    text-align: center;
    
    .error__code {
        margin: 0 0 3rem;
        color: #db402c;
        font-size: 8rem;
        font-weight: 900;
        line-height: 1;
    }
    
    .error__message {
        color: #333;
        font-size: 2.6rem;
        font-weight: 500;
    }
    
    .error__button {
        margin: 3rem 0 0;
        display: inline-block;
        width: 20rem;
        height: 4rem;
        font-size: 1.6rem;
        padding: 6.4px 1.5rem;
        border-radius: 0.2rem;
        color: #fff;
        background: #1890ff;
        border-color: #1890ff;
        text-shadow: 0 -0.1rem 0 rgb(0 0 0 / 12%);
        box-shadow: 0 0.2rem 0 rgb(0 0 0 / 5%);
        text-decoration: none;
        
        &:hover {
            background: #40a9ff;
            border-color: #40a9ff;
        }
    }
`;
