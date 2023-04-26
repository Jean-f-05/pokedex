import styled, { css } from 'styled-components';
import backgroundImg from "../../assets/svg/backgroundImg.svg"
import { SortNumericDown, SortNumericUp } from '@styled-icons/bootstrap';

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

export const SortWrapper = styled.div`
    display: flex;
    flex-direction: column;
   justify-content: space-around;
`;

const inactive = (theme) => css`
        filter: grayscale(1);
        background-color: #333333;
        color: ${theme.colors.pokemonGrey}; 
        &:hover{
        cursor: unset;
        transform: scale(1);
        background-color: #333333;    
    }    
`;

export const DescendingSort = styled(SortNumericUp)`
    ${({ isInactive, theme }) => css`
    height: 7rem;
    color:${theme.colors.pokemonWhite};
    background-color: ${theme.colors.pokemonRed};
    border: 2px solid ${theme.colors.pokemonWhite};
    &:hover{
        cursor: pointer;
        background-color: ${theme.colors.pokemonRed};
        transform:scale(1.1);
    };
    ${isInactive === "ASC" && inactive(theme)}
    `}
`;

export const AscendingSort = styled(SortNumericDown)`
${({ isInactive, theme }) => css`
    height: 7rem;
    color:${theme.colors.pokemonWhite};
    background-color: ${theme.colors.pokemonRed};
    border: 2px solid ${theme.colors.pokemonWhite};
    &:hover{
        cursor: pointer;
        background-color: ${theme.colors.pokemonRed};
        transform:scale(1.1);
    }
    ${isInactive === "DESC" && inactive(theme)}
    `}
`;