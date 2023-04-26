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
`


export const DescendingSort = styled(SortNumericUp)`
    height: 7rem;
    color:white;
    background-color: red;
    border: 2px solid white;
    &:hover{
        cursor: pointer;
    }
`
export const AscendingSort = styled(SortNumericDown)`
    height: 7rem;
    color:white;
    background-color: red;
    border: 2px solid white;
    &:hover{
        cursor: pointer;
    }
`