import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #cdcdcd;
    background-color: #1b202b;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    border-radius: 12px;
    flex: 1;
 
    &:hover{
        opacity: 0.6;
    }
    
    &.equalsButton{
    background-color:#3d177a;
    }
`