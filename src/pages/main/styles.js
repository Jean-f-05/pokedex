import styled, { css } from 'styled-components';
import { FilterWrapper as OtherFilters } from "../../components/Filter/styles"

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
    margin-bottom: 1rem;

    @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FilterWrapper = styled.div`
${({ order }) => css`

    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    ${OtherFilters}:nth-child(n+2)  {
        margin-top:0;
  }
  @media (max-width: 600px) {
    position: unset;
    order:${order};
  }
  `}
`;

export const Image = styled.img`
    height: 25rem;
    width: 25rem;
    margin-top: -2.2rem;

    @media (max-width: 600px) {
        margin-left: auto;
        margin-right: auto;
  }
`;

export const Footer = styled.footer`
    height: 20vh;
    width: 100%;
`