import styled, { css } from 'styled-components';


const barConfig = {
    hp: (value) => css`        
        width: ${value * 100 / 255}%;    
    `,
    attack: (value) => css`
    width: ${value * 100 / 190}%;    
    `,
    defense: (value) => css`
    width: ${value * 100 / 250}%;    
    `,
    'special-attack': (value) => css`
         width: ${value * 100 / 194}%;   
    `,
    'special-defense': () => css`
    width: ${50 * 100 / 250}%;    
`,
    speed: (value) => css`
    width: ${value * 100 / 200}%;    
    `,
}

export const Wrapper = styled.div`
    height: 1rem;
    width: 6rem;
    border: 3px solid black;
    border-radius: 15px;
    position: relative;
    background-color: pink;
    margin-left:1rem
`;

export const Filledbar = styled.div`
${({ description, value }) => css`

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: red;
    border-radius: 15px;

    ${description && barConfig[description](value)};
`}
`;