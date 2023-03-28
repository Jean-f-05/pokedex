import styled, { css } from 'styled-components';
import { CloseOutline } from "@styled-icons/evaicons-outline/";

export const Wrapper = styled.div`
${({ theme }) => css`
    background-color: inherit;
    border: inset 0.8rem yellow;
    padding: 1rem;
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

`;

export const CardContent = styled.div`
    display: flex;
    gap: 5rem;
`

export const CardImage = styled.img`

`

export const CardDetails = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    flex: 2;
`;