import * as S from './styles';
import Card from '../Card';
import { useAxios } from './useAxios';
import Loader from "../shared/Loader";

const Table = () => {
    const { data, loading, error } = useAxios('https://pokeapi.co/api/v2/pokemon/', { limit: 1008 });
    const Error = () => { return <h1>ERROR</h1> }

    return (
        <S.Wrapper>
            {loading ? <Loader /> :
                (error ? <Error /> :
                    data && data.map(pokemon => (
                        <Card
                            key={pokemon.name}
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

