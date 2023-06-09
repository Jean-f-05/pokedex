import styled, { css } from 'styled-components';
import { CloseOutline } from "@styled-icons/evaicons-outline/";
import { pokeColors } from './pokeColors';


export const Wrapper = styled.div`
${({ theme, border }) => css`
    background-color: #fff;
    padding: 2.8rem 1rem;
    border: inset 0.8rem ${border && pokeColors[border]}
`}
`;


export const CardMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const CloseOutlineIcon = styled(CloseOutline)`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    &:hover{
        cursor: pointer;
    }
`;

export const CardHeader = styled.h1`
    ${({ color }) => css`
        text-transform: uppercase;
        margin-bottom: 1.8rem;
        text-align:center;
        color: ${color && pokeColors[color]};
`}
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction:row;
    gap: 2rem;
    align-items: flex-start;

    @media (max-width: 400px) {
    flex-direction: column;
    align-items:center;
  }
    `

export const CardImage = styled.img`
    max-width: 15rem;
    max-height: 15rem;
`

export const CardDetails = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.4rem;
`;

export const CardList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`

export const CardListHeader = styled.h2`
   ${({ theme }) => css`
    font-size: ${theme.fontSizes.xsmall}; 
    font-weight: ${theme.fontWeight.xlbold};
    text-transform: uppercase;
    white-space: nowrap;
`}
`;

export const CardListDetail = styled.h2`
  text-transform: uppercase;

`