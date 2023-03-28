import styled from 'styled-components';
import { CloseOutline } from "@styled-icons/evaicons-outline/";

export const BackdropWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalOverlayWrapper = styled.div`
    position: fixed;
    top: 20vh;
    left: 5%;
    width: 90%;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    min-height: 15rem;
    overflow: hidden;
`;

export const CloseButton = styled(CloseOutline)`
    position: absolute;
    right: 1rem;
    top: 1rem;
`

export const ModalHeader = styled.h1`
    font-size: 2.2rem;
    margin-top: 2.2rem;
    text-align: center;
`

export const ModalImage = styled.img`

`