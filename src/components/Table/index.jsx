import * as S from './styles';
import Card from '../Card';
import Loader from "../shared/Loader";
import Error from "../shared/Error";
import { useContext, useState } from "react";
import { PokemonsContext } from "../../pages/main/index";
import CardDetails from '../CardDetails';

/* maxPokemons= 1008 */

const Table = () => {
    let pokemons = useContext(PokemonsContext);
    let { request: { data, loading, error }, pokemonName } = pokemons;

    const [showModal, setShowModal] = useState(false);
    const handleModalStatus = (id) => {
        setShowModal(!showModal);
        pokemons.currentID = id;

    };
    function filterItems(arr, query) {
        return arr.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()));
    }

    if (data) {
        data = data[0];
    }
    if (data && pokemonName) {
        const filteredItems = filterItems(data, pokemonName);
        data = filteredItems;
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
                                setModal={handleModalStatus}
                            />
                        )))
                )
            }
            {showModal && <CardDetails setModal={handleModalStatus} />}
        </S.Wrapper >
    );
};

export default Table;