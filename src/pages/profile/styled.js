import styled from 'styled-components';

export const StyledProfile = styled.section`
    width: 100%;
    max-width: 158rem;
`;

export const StyledContainer = styled.div`
    margin: 0 auto;
    max-width: 106.1rem;
`;

export const StyledHeader = styled.header`
    text-align: center;
`;

export const StyledMain = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledContent = styled.div`
    max-width: 36.2rem;
    padding: 1.4rem;
`;

export const StyledImageContainer = styled.div`
    width: 28.8rem;
    height: 28.8rem;
    padding: 1.4rem;
    
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        display: block;
    }
`;

export const StyledName = styled.h3`
    padding: 1rem 0;
    margin: 0 0 0.5rem;
    color: rgba(0,0,0,.85);
    font-weight: 600;
    font-size: 2.4rem;
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

export const StyledLink = styled.a`
    color: #1890ff;
    text-decoration: none;
    outline: none;
    text-decoration: none;
    
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
