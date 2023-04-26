import styled, { css } from 'styled-components';
import backgroundImg from "../../assets/svg/backgroundImg.svg"
export const Wrapper = styled.div`
  `;

export const InputWrapper = styled.form`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
${({ theme }) => css`
    font-size: ${theme.fontSizes.xlarge};
    font-weight: ${theme.fontWeight.xbold};
    text-align: center;
    background: url(${backgroundImg});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
        
`}
`

export const Input = styled.input`
 ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium}; 
    border: none;
    margin-top: 1rem;
    border-bottom: 0.2rem solid red;
    color: red;
    background-color: #FCE2DB;
    text-align: center;

    &:focus{
        outline: none;
    }
    &::placeholder{
        color:${theme.colors.pokemonRed};
    }
    `}
`