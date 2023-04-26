import styled, { css } from 'styled-components';
import { ChevronRightOutline } from '@styled-icons/evaicons-outline'

export const Wrapper = styled.div`
    ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
`}`;

export const ChevronRight = styled(ChevronRightOutline)`
${({ theme }) => css`
    color:${theme.colors.pokemonBlue};
    transition: all 0.2s ease-in;
    &:hover{
        cursor: pointer;
    }
`}
`;

export const CardImage = styled.img`
    max-height: 10rem;
    max-width: 10rem;
    filter: grayscale(0.8);
    transition: all 0.2s ease-in;
`

export const CardElement = styled.li`
${() => css`
    padding: 1rem ;
    background-color: lightblue;
    border: 0.5rem solid black;
    border-radius: 0.5rem;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover{
    ${ChevronRight}{
        transform: translateX(0.4rem);
    };
    ${CardImage}{
        transform: scale(1.4);
        filter: grayscale(0);
    };
};
`}`;


export const CardName = styled.h3`
    ${({ theme }) => css`
    font-size: ${theme.fontSizes.xmedium}; 
    margin-top: 0.5rem;
    text-transform: capitalize;
    `};
    `
export const CardNumber = styled.h4`
     ${({ theme }) => css`
    font-size: ${theme.fontSizes.xsmall}; 
    font-weight: ${theme.fontWeight.bold};
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    `}
   `;


export const Anchor = styled.div`
    ${({ theme }) => css`
    font-size: ${theme.fontSizes.small}; 
    font-weight: ${theme.fontWeight.bold};
    text-decoration: none;
    color:${theme.colors.pokemonBlue}; 
    &:hover{
        cursor: pointer;
    }
    `}
`


export const AnchorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -1rem;
`