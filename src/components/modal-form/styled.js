import styled from 'styled-components';

export const StyledWrap = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    z-index: 101;
    background: rgba(0,0,0,.45);
`;

export const StyledContainer = styled.section`
    max-width: 52rem;
    color: #000;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border: 0;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
    pointer-events: auto;
    text-align: left;
`;

export const StyledHeader = styled.header`
    padding: 1.6rem 2.4rem;
    color: rgba(0,0,0,.65);
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
    
    h3 {
        margin: 0;
        color: rgba(0,0,0,.85);
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        word-wrap: break-word;
    }
`;

export const StyledContent = styled.div`
    padding: 2.4rem;
    font-size: 1.4rem;
    line-height: 1.5715;
    word-wrap: break-word;
`;

export const StyledFieldSet = styled.fieldset`
    margin: 0 0 2.4rem;
    border: 0;
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem 0 0;
    
    .secondary {
        margin: 0 0 0 1rem;
    }
`;

export const StyledButton = styled.button`
    display: inline-block;
    font-size: 1.6rem;
    cursor: pointer;
    background: none;
    border: none;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    
    &.cancel {
        color: #db402c;
        height: 3.2rem;
        padding: 0.4rem 1.5rem;
        margin: 0 0 0 1rem;
        
        &:hover {
            opacity: 0.75;
        }
    }
    
    &.primary {
        width: 100%;
        height: 4.2rem;
        padding: 1rem 1.5rem;
        border-radius: 0.2rem;
        color: #fff;
        background: #1890ff;
        border: 0.1rem solid #1890ff;
        text-shadow: 0 -0.1rem 0 rgb(0 0 0 / 12%);
        box-shadow: 0 0.2rem 0 rgb(0 0 0 / 5%);
        
        &:hover {
            background: #40a9ff;
            border-color: #40a9ff;
        }
    }
`;
