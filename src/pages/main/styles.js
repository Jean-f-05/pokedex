import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => css`
 background-color: ${theme.colors.pokemonPink};
 display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}`;


export const ImageWrapper = styled.div`
height: 20rem;
width: 20rem;
margin-top: -2.2rem;
`;

export const Image = styled.img`
height: 100%;
width: 100%;
`;