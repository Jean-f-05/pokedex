import styled, { css } from 'styled-components';
import { CloseOutline } from "@styled-icons/evaicons-outline/";
import { borderColors } from './borderColors';


export const Wrapper = styled.div`
${({ theme, border }) => css`
    background-color: inherit;
    padding: 1rem;
    border-style: inset;
    border-width: 0.8rem;

    ${border && borderColors[border]}
`}
`;

export const CloseOutlineIcon = styled(CloseOutline)`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    &:hover{
        cursor: pointer;
    }
`;

export const CardHeader = styled.h1`
    margin-left: 1rem;
    text-transform: uppercase;
`;

export const CardContent = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`

export const CardImage = styled.img`
    max-width: 15rem;
    max-height: 15rem;
`

export const CardDetails = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.4rem;
`;

export const CardList = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`

export const CardListHeader = styled.h2`
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 800;
`

export const CardListDetail = styled.h2`

`