import styled, { css } from 'styled-components';

export const FilterWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-top: 1rem;
    position: absolute;
    z-index: 8;
    min-width: 14.5rem;
    @media (max-width: 600px) {
        position: unset;
  }
`;

export const FilterHeader = styled.div`
${({ theme }) => css`
    display: flex;
    flex-direction:row;
    align-items: center;  
    cursor: pointer;  
    justify-content: space-between;
    background-color: ${theme.colors.pokemonRed};
    border: 2px solid ${theme.colors.pokemonRed};
    padding: 0 0.5rem;
    text-transform: uppercase;
`}
`;


export const FilterText = styled.h3`
 ${({ theme }) => css`
    font-size: ${theme.fontSizes.small}; 
    display: inline-block;    
    color: ${theme.colors.pokemonWhite};
`}
`;

export const FilterBody = styled.div`
    display:none;

    ${({ active, theme }) => active && css`
    border-left: 2px solid ${theme.colors.pokemonRed};
    border-right: 2px solid ${theme.colors.pokemonRed};
    border-bottom: 2px solid ${theme.colors.pokemonRed};
    background-color: ${theme.colors.pokemonWhite};
    display: block;
`}
`

export const FilterRadioWrapper = styled.ul``;

export const FilterInput = styled.li`
  ${({ theme }) => css`
  display:flex;
  margin-bottom:0.4rem;
  justify-content: space-between;
  
  &:hover,
  &:focus-within{
    background: ${theme.colors.pokemonPink};
  }
  `}
`;

export const RadDesign = styled.div`
${({ theme }) => css`
    width: 22px;
    height: 22px;
    border-radius: 100px;
    background: linear-gradient(to right, ${theme.colors.pokemonRed}, ${theme.colors.pokemonYellow});
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      background: hsl(0, 0%, 70%);
      transform: scale(1.1);
      transition: .3s;
    }
    `}
  `
export const RadText = styled.div`
 color: hsl(0, 0%, 60%);
  font-size: 1.2rem;
  font-weight: 800;
  transition: .3s;
    margin-left: 1.4rem;
`

export const Label = styled.label`
${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: 10px 0;

  cursor: pointer;
  transition: .3s;

  &:hover,
  &:focus-within{
    background: ${theme.colors.pokemonPink};
    `}
  }`



export const Input = styled.input`
position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
  
  &:checked+${RadDesign}::before {
  transform: scale(0);

  &:checked~${RadText} {
  color: hsl(0, 0%, 40%);
}
}
`


export const FilterInputLi = styled.li`
  ${({ theme }) => css`
display:flex;
margin-bottom:0.4rem;
justify-content: space-between;
padding: 1rem;
    
  &:hover,
  &:focus-within{
    background: ${theme.colors.pokemonPink};
  }

  `}
`