import styled, { css } from 'styled-components';


const barConfig = {
    hp: (hp) => css`        
        width: ${hp * 100 / 255}%;    
    `,

    att: (att) => css`
    width: ${att * 100 / 190}%;    
    `,

    def: (def) => css`
    width: ${def * 100 / 230}%;    
    `,

    spd: (spd) => css`
    width: ${spd * 100 / 230}%;    
    `,
}




export const Wrapper = styled.div`
    height: 1rem;
    width: 6rem;
    border: 3px solid black;
    border-radius: 15px;
    position: relative;
    background-color: pink;
    margin-right: 2rem;
`;

export const Filledbar = styled.div`
${({ hp, att, def, spd }) => css`

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: red;
    border-radius: 15px;

    ${hp && barConfig.hp(hp)}
    ${att && barConfig.att(att)}
    ${def && barConfig.def(def)}
    ${spd && barConfig.spd(spd)}
`}
`;