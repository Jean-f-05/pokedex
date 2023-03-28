import * as S from './styles';
import { createPortal } from 'react-dom';


const BackDrop = ({ children, setModal }) => {
    return (
        <S.BackdropWrapper onClick={setModal}>{children}</S.BackdropWrapper>)
};
const ModalOverlay = ({ children }) => {
    return (
        <S.ModalOverlayWrapper>
            <div>{children}</div>
        </S.ModalOverlayWrapper>
    )
}

const portalElement = document.getElementById("modal");

const Modal = ({ children, setModal }) => {
    return (
        <>
            {createPortal(<BackDrop setModal={setModal} />, portalElement)}
            {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </>
    );
};

export default Modal;

