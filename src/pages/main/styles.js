import styled, { css } from 'styled-components';
import { FilterWrapper } from "../../components/Filter/styles"

export const Wrapper = styled.main`
    ${({ theme }) => css`
 background-color: ${theme.colors.pokemonPink};
 display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}`;


export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
`;

export const LeftFilters = styled.div`
    ${FilterWrapper}:nth-child(n+2)  {
        margin-top:0;
  }
`;

export const Image = styled.img`
height: 25rem;
width: 25rem;
margin-top: -2.2rem;
`;

export const Footer = styled.footer`
    height: 20vh;
    width: 100%;
`