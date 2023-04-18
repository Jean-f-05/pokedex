import * as S from './styles';
import SearchBar from '../../components/SearchBar';
import Table from '../../components/Table';
import { useAxios } from '../../components/Hooks/useAxios';
import { createContext, useState } from 'react';
import { sortByNumber } from "../../utils/index"
import Filter from '../../components/Filter';
import { generations } from "./generations";
import { types } from "./types";
export const PokemonsContext = createContext({});

const Main = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [field, setField] = useState({ id: "1", name: "generation" });
    const url = `https://pokeapi.co/api/v2/${field.name}/${field.id}`
    let { request } = useAxios(url);

    if (request.data) {
        sortByNumber(request.data);
    };

    return (
        <S.Wrapper>
            <PokemonsContext.Provider value={{ request, setPokemonName, pokemonName }}>
                <S.ImageWrapper>
                    <S.FilterWrapper order="2">
                        <Filter value={setField} text="generation" radio={generations} />
                    </S.FilterWrapper>
                    <S.Image src={require("../../assets/imgs/poke2.png")} alt="Round image containing several pokemons" />
                    <S.FilterWrapper order="3">
                        {<Filter value={setField} text="type" radio={types} />}
                    </S.FilterWrapper>
                </S.ImageWrapper>
                <SearchBar />
                <Table />
                <S.Footer />
            </PokemonsContext.Provider>
        </S.Wrapper>
    );
};

export default Main;

