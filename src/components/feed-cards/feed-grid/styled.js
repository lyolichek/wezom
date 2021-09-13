import styled from 'styled-components';

export const StyledGrid = styled.ul`
    display: grid;
    column-gap: 1.6rem;
    row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 25rem));
`;

export const StyledCard = styled.li`
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    position: relative;
    background: #fff;
    border-radius: 0.2rem;
    overflow: hidden;
    margin: 0 0 2rem;
    transition: all .3s;
    
    &:hover {
        box-shadow: 0 0 1rem 0 rgb(51 51 51 / 33%);
    }
`;

export const StyledImageContainer = styled.div`
    max-width: 25rem;
    max-height: 25rem;
    
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 0.2rem;
    }
`;

export const StyledContent = styled.div`
    padding: 1.4rem;
`;

export const StyledName = styled.h3`
    padding: 1rem 0;
    margin: 0 0 0.5rem;
    color: rgba(0,0,0,.85);
    font-weight: 600;
    font-size: 1.6rem;
    border-bottom: 0.1rem dashed rgba(0,0,0,.06);
`;

export const StyledAge = styled.span`
    color: rgba(0,0,0,.45);
    white-space: nowrap;
`;

export const StyledList = styled.ul`
    padding: 1rem 0;
    margin: 0 0 1rem;
    border-bottom: 0.1rem dashed rgba(0,0,0,.06);
    list-style: none;
`;

export const StyledItem = styled.li`
    color: rgba(0,0,0, 0.65);
    font-size: 1.4rem;
    
    & + li {
        margin-top: 0.5rem;
    }
`;

export const StyledItemLink = styled.a`
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
