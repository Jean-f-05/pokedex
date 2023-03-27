import * as S from './styles';
import Card from '../Card';
import Loader from "../shared/Loader";
import Error from "../shared/Error";
import { useContext } from "react";
import { PokemonsContext } from "../../pages/main/index"

/* maxPokemons= 1008 */

const Table = () => {
    let pokemons = useContext(PokemonsContext);
    let { request: { data, loading, error }, pokemonName } = pokemons;
    let filteredData;



    if (data && pokemonName) {
        filteredData = data.filter(pokemon => pokemon.name === pokemonName)
        data = filteredData;
    }
    return (
        <S.Wrapper>
            {loading ? <Loader /> :
                (error ? <Error errorMsg={"Ups, something went wrong..."} /> :
                    (!data || data.length === 0 ? <Error errorMsg={"Sorry, can't find that pokemon..."} /> :
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

