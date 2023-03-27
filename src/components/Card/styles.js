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
${({ pokeColor }) => css`
    padding: 1rem ;
    background-color: lightblue;
    border: 0.5rem solid ${pokeColor};
    border-radius: 0.5rem;
    counter-increment: number;
    
    &:hover{
    ${ChevronRight}{
        transform: translateX(0.4rem);
    };
    ${CardImage}{
        transform: scale(1.4);
        filter: grayscale(0);
    };
};

&:before {
        position: absolute;
        content: "00" counter(number);
        font-size: 1.1rem;
        font-weight: 600;
    };

    &:nth-child(n+10):before {
        content: "0" counter(number);
    };
   
    &:nth-child(n+100):before {
        content: "" counter(number);
    };

`}`;


export const CardName = styled.h3`
    font-size: 1.8rem;
    margin-top: 0.5rem;
    text-transform: capitalize;
`
export const CardNumber = styled.h4`
    font-size: 1.2rem;
    font-weight: 600;

    
   `;


export const Anchor = styled.a`
    ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: 600;
    text-decoration: none;
    color:${theme.colors.pokemonBlue}; 
    `}
`


export const AnchorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -1rem;
`