import Modal from '../shared/Modal';
import * as S from './styles';


const CardDetails = ({ setModal }) => {
    return (
        <Modal setModal={setModal}>
            <S.Wrapper>
                <S.CloseOutlineIcon size={32} color="#3B4CCA" onClick={setModal} />
                <S.CardHeader>PIKACHU</S.CardHeader>
                <S.CardContent>

                    <S.CardImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt="pikachu" />

                    <S.CardDetails>
                        <li>
                            <h2>ID: 25</h2>
                        </li>
                        <li>
                            <h2>Type: Eletric</h2>
                        </li>
                        <li>
                            <h2>Height: 4</h2>
                        </li>
                        <li>
                            <h2>Weight: 60</h2>
                        </li>
                        <li>
                            <h2>HP: 35</h2>
                        </li>
                        <li>
                            <h2>Attack: 55</h2>
                        </li>
                        <li>
                            <h2>Defense: 40</h2>
                        </li>
                        <li>
                            <h2>Speed: 90</h2>
                        </li>

                    </S.CardDetails>

                </S.CardContent>
            </S.Wrapper>
        </Modal >
    );
};

export default CardDetails;

