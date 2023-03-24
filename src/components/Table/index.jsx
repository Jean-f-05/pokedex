import * as S from './styles';
/* import { pokemons } from "./mock"; */
import Card from '../Card';
import { useAxios } from './useAxios';

const Table = () => {
    const { data, loading, error } = useAxios('https://pokeapi.co/api/v2/pokemon/', { limit: 151 });
    const Loader = () => { return <h1>LOADING</h1> }
    const Error = () => { return <h1>ERROR</h1> }

    return (
        <S.Wrapper>
            {loading ? <Loader /> :
                (error ? <Error /> :
                    data && data.map(pokemon => (
                        <Card
                            pokeUrl={pokemon.url}
                            pokeName={pokemon.name}
                            pokeColor={pokemon.color}
                        />
                    )))
            }
        </S.Wrapper >
    );
};

export default Table;

