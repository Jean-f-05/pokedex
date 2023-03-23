import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => css`
        margin-top: 2rem ;
        width: 95%;
        background-color: ${theme.colors.pokemonWhite};
        border: 0.3rem solid ${theme.colors.pokemonRed};
        border-radius: 0.5rem;
        padding: 2rem;
        display: flex;  
        flex-wrap: wrap;
`}`;
