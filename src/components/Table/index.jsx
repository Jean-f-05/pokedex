import * as S from './styles';
import Card from '../Card';
import Loader from "../shared/Loader";
import Error from "../shared/Error";
import { useContext, useState } from "react";
import { PokemonsContext } from "../../pages/main/index";
import CardDetails from '../CardDetails';
import { filterItems } from "../../utils/index";
import { sortDescByNumber, sortByNumber } from '../../utils/index';

const Table = () => {
    let pokemons = useContext(PokemonsContext);
    let { request: { data, loading, error }, pokemonName } = pokemons;
    const [showModal, setShowModal] = useState(false);
    const handleModalStatus = (id) => {
        setShowModal(!showModal);
        pokemons.currentID = id;
    };
    const [sort, setSort] = useState("DESC")

    if (data && pokemonName) {
        const filteredItems = filterItems(data, pokemonName);
        data = filteredItems;
    };
    if (data && sort) {
        if (sort === "DESC") {
            data = sortByNumber(data)
        }
        if (sort === "ASC") {
            data = sortDescByNumber(data)
        }
    }

    return (
        <S.Wrapper>
            <S.SortWrapper>
                <S.AscendingSort onClick={() => setSort("DESC")} isInactive={sort}></S.AscendingSort>
                <S.DescendingSort onClick={() => setSort("ASC")} isInactive={sort}></S.DescendingSort>
            </S.SortWrapper>
            {loading ? <Loader /> :
                (error ? <Error errorMsg={"Ups, something went wrong..."} /> :
                    (!data || data.length === 0 ? <Error errorMsg={"Sorry, can't find that pokemon..."} /> :
                        data && data.map(pokemon => (
                            <Card
                                key={pokemon.name}
                                pokeUrl={pokemon.url}
                                pokeName={pokemon.name}
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