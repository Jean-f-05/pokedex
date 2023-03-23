import * as S from './styles';
import { pokemons } from "./mock"
import { getId } from '../../utils';

const Table = ({ children }) => {

    return (
        <S.Wrapper>
            {pokemons.map((pokemon, id) => (
                <>
                    <h1>{pokemon.name}</h1>
                    <h2>{getId(pokemon.url)}</h2>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(pokemon.url)}.png`} alt={pokemon.name} />
                </>
            ))
            }

        </S.Wrapper >
    );
};

export default Table;

