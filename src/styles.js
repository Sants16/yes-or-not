import styled from "styled-components";

export const Fundo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    background-color: ${props => props.background};
    height: 100%;
    width: 100%;
    color: '#e6e6e6'
`