import * as S from './styles';
import SearchBar from '../../components/SearchBar';
import Table from '../../components/Table';
import { useAxios } from '../../components/Hooks/useAxios';
import { createContext, useState } from 'react';
import { sortByNumber } from "../../utils/index"
import Filter from '../../components/Filter';
import { generations } from "./generations";
export const PokemonsContext = createContext({});

const Main = () => {
    const [generation, setGeneration] = useState("1")
    let { request } = useAxios(`https://pokeapi.co/api/v2/generation/${generation}`);
    if (request.data) {
        request.data = [request.data.pokemon_species];
        //SORT BY TEXT
        //request.data[0].sort((a, b) => a.name.localeCompare(b.name)); 

        //SORT BY NUMBER
        sortByNumber(request.data[0]);
        /* request.data[0].sort((a, b) => getId(a.url) - getId(b.url)); */
    }

    const [pokemonName, setPokemonName] = useState("");

    return (
        <S.Wrapper>
            <PokemonsContext.Provider value={{ request, setPokemonName, pokemonName }}>
                <S.ImageWrapper>
                    <S.FilterWrapper order="2">
                        <Filter generation={setGeneration} text="GENERATIONS" radio={generations} />
                    </S.FilterWrapper>
                    <S.Image src={require("../../assets/imgs/poke2.png")} alt="Round image containing several pokemons" />
                    <S.FilterWrapper order="3">
                        <Filter generation={setGeneration} />
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

