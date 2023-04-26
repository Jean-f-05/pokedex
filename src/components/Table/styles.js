import styled, { css } from 'styled-components';
import backgroundImg from "../../assets/svg/backgroundImg.svg"


export const Wrapper = styled.div`
    ${({ theme }) => css`
        margin-top: 3rem ;
        width: 100%;
        background: url(${backgroundImg});  
        border-top: 0.3rem solid ${theme.colors.pokemonRed};
        border-bottom: 0.3rem solid ${theme.colors.pokemonRed};
        padding: 2rem;
        display: flex;  
        flex-wrap: wrap;
        justify-content: space-evenly;
        row-gap: 1.5rem;
        position: relative;
       
`}`;


