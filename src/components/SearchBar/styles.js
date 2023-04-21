import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  `;

export const InputWrapper = styled.form`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
${({ theme }) => css`
    color:${theme.colors.pokemonRed};
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
`}
`

export const Input = styled.input`
    border: none;
    margin-top: 1rem;
    border-bottom: 0.2rem solid red;
    color: red;
    background-color: #FCE2DB;
  

    &:focus{
        outline: none;
    }
`