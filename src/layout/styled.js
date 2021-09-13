import styled from 'styled-components';
import BackDrop from '../assets/images/backdrop.jpg';

export const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    height: 100%;
`;

export const StyledFooter = styled.footer`
    padding: 1.25vw 2.6vw;
    background-color: #f1f1f1;
    color: rgba(0,0,0, 0.65);
    text-align: center;
`;

export const StyledContent = styled.main`
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    padding: 1.2rem 2vw;
    background-color: #fff;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    background-image: url(${BackDrop});
`;
