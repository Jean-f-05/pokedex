import * as S from './styles';
import Card from '../Card';
import Loader from "../shared/Loader";
import { useContext } from "react";
import { PokemonsContext } from "../../pages/main/index"

/* maxPokemons= 1008 */

const Table = () => {
    let pokemons = useContext(PokemonsContext);
    let { request: { data, loading, error }, pokemonName } = pokemons;
    let filteredData;
    const Error = () => { return <h1>ERROR</h1> };


    if (data && pokemonName) {
        filteredData = data.filter(pokemon => pokemon.name === pokemonName)
        data = filteredData;
    }
    return (
        <S.Wrapper>
            {loading ? <Loader /> :
                (error ? <Error /> :
                    (!data || data.length === 0 ? <h1>Sorry, can't find that pokemon...</h1> :
                        data && data.map(pokemon => (
                            <Card
                                key={pokemon.name}
                                pokeUrl={pokemon.url}
                                pokeName={pokemon.name}
                                pokeColor={pokemon.color}
                            />
                        )))
                )
            }
        </S.Wrapper >
    );
};

export default Table;

