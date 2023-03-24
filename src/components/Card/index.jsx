import * as S from './styles';
import { getId } from '../../utils';


const Card = ({ pokeUrl, pokeName, pokeColor }) => {
    const id = getId(pokeUrl);

    return (
        <S.CardElement key={id} pokeColor={pokeColor}>
            <S.CardImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokeName} />
            <S.CardNumber></S.CardNumber>
            <S.CardName>{pokeName}</S.CardName>
            <S.AnchorWrapper>
                <S.Anchor href="/">Know more</S.Anchor>
                <S.ChevronRight size={32} color="#3B4CCA" />
            </S.AnchorWrapper>
        </S.CardElement>
    );
};

export default Card;
