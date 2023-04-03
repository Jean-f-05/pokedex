import * as S from './styles';
import { getId, stdNumber } from '../../utils';

const Card = ({ pokeUrl, pokeName, pokeColor, setModal }) => {
    const id = getId(pokeUrl);


    return (
        <S.CardElement key={id} pokeColor={pokeColor} onClick={() => { setModal(id) }}>
            <S.CardImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokeName} />
            <S.CardNumber>{stdNumber(id)}</S.CardNumber>
            <S.CardName>{pokeName}</S.CardName>
            <S.AnchorWrapper >
                <S.Anchor>Know more</S.Anchor>
                <S.ChevronRight size={32} color="#3B4CCA" />
            </S.AnchorWrapper>
        </S.CardElement>
    );
};

export default Card;
