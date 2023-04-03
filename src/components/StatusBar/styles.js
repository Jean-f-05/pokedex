import styled, { css } from 'styled-components';
import { borderColors } from '../CardDetails/borderColors';

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
${({ color }) => css`
    height: 1rem;
    width: 6rem;
    border-radius: 15px;
    position: relative;
    background-color: #00000010;
    margin-left:1rem;
    border: solid 0.2rem #000; 
`}
`;

export const Filledbar = styled.div`
${({ description, value, color }) => css`

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;

    background-color: ${color && borderColors[color]};
    border-radius: 15px;

    ${description && barConfig[description](value)};
`}
`;