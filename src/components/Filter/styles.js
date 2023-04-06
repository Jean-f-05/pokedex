import styled, { css } from 'styled-components';

export const FilterWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-top: 1rem;
    min-width: 14rem;
`;

export const FilterHeader = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;  
    cursor: pointer;  
    gap: 0.5rem;
    background-color: red;
    border: 2px solid white;
    padding: 0 0.5rem;
`;


export const FilterText = styled.h3`
    font-size: 1.4rem;
    display:inline-block;
    
    color: white;
`
export const FilterBody = styled.div`
display: none;
${({ active }) => active && css`
    display: flex;
    flex-direction:column;
    align-items:center;
    border-left: 2px solid white;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    padding-top: 0.5rem;
`}
`

export const FilterGenWrapper = styled.ul`

`;

export const FilterInput = styled.li`
display:flex;
margin-bottom:0.4rem;
justify-content: space-between;
`;

export const Label = styled.label`
    font-size:1.2rem;
    font-weight: 500;
    color:red;
    margin-right: 2rem;
`