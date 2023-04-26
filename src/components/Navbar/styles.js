import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
${({ theme }) => css`
    background-color: ${theme.colors.pokemonRed};
    height: 10vh;
    width: 100 %;
    color:#FCE2DB
`}
`;

export const ListWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;

`;

export const Navheader = styled.h1`
${({ theme }) => css`
    font-size: ${theme.fontSizes.xlarge};
`}`;


