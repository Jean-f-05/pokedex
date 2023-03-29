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
    margin-left: 1rem;
    text-transform: uppercase;
`;

export const CardContent = styled.div`
    display: flex;
    gap: 5rem;
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
    flex: 2;
`;

export const CardList = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`