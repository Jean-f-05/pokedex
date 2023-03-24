import * as S from './styles';
import { pokemons } from "./mock"
import Card from '../Card';

const Table = () => {

    return (
        <S.Wrapper>
            {pokemons.map((pokemon) => (
                <Card
                    pokeUrl={pokemon.url}
                    pokeName={pokemon.name}
                    pokeColor={pokemon.color}
                />
            ))}
        </S.Wrapper >
    );
};

export default Table;

