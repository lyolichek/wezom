import styled from 'styled-components';

export const StyledTable = styled.table`
    width: 100%;
    background-color: #fff;
    color: rgba(0,0,0,.65);
    margin: 0 0 2rem;
    
    tr {
        border-bottom: 0.1rem solid #f0f0f0;
    }
    
    td {
        padding: 0.8rem 1.6rem;
        
        &:last-child {
            text-align: right;
        }
    }
    
    img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
    }
`;

export const StyledLink = styled.a`
    color: #1890ff;
    text-decoration: none;
    outline: none;
    text-decoration: none;
    transition: color .3s;
    
    &:hover {
        color: #000;
    }
`;

export const StyledCountry = styled.span`
    font-weight: bold;
    display: block;
`;

export const StyledState = styled.span`
    color: #2f54eb;
    background: #f0f5ff;
    display: inline-block;
    padding: 0 0.7rem;
    font-size: 1.2rem;
    line-height: 1.5;
    white-space: nowrap;
    background: #fafafa;
    border: 0.1rem solid #adc6ff;
    border-radius: 0.2rem;
`;
