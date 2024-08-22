import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(45deg, #0CBCB4, #078CBC,#3014BD);
    
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Content = styled.div`
    background-color: #213440;
    width: 50%;
    min-height: 350px;
    padding: 8px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 6px rgba(0, 0, 0, 0.2);
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
`
export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
`