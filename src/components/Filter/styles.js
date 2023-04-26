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
    padding: 0.8rem;
    background-color: ${theme.colors.pokemonWhite};
    display: block;
`}
`

export const FilterRadioWrapper = styled.ul`
    
`;

export const FilterInput = styled.li`
display:flex;
margin-bottom:0.4rem;
justify-content: space-between;
`;

export const Label = styled.label`
 ${({ theme }) => css`
    font-size: ${theme.fontSizes.small}; 
    font-weight: ${theme.fontWeight.regular};
    color:${theme.colors.pokemonRed};
`}
`