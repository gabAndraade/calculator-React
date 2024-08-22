import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    margin: 3px;
    border:none;
    border-radius: 12px;
    background-color: #9595ab;
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    font-family: 'Microsoft YaHei';
    flex: 1;
 
    &:hover{
        opacity: 0.6;
    }
    
    &.equalsButton{
    background-color:#fc3503;
    }
`