import * as S from './styles';
import Card from '../Card';
import { useAxios } from './useAxios';
import Loader from "../shared/Loader";

/* maxPokemons= 1008 */

const Table = () => {
    let { data, loading, error } = useAxios('https://pokeapi.co/api/v2/pokemonss/', { limit: 90 });
    let filteredData;
    const Error = () => { return <h1>ERROR</h1> }
    const pokeName = "";

    if (data && pokeName) {
        filteredData = data.filter(pokemon => pokemon.name === pokeName)
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

