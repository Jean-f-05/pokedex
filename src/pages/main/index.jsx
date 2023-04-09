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
    const [type, setType] = useState(null);
    const [generation, setGeneration] = useState("1");
    let { request } = useAxios(`https://pokeapi.co/api/v2/generation/${generation}`);
    let { request: requestType } = useAxios(`https://pokeapi.co/api/v2/type/${type}`);


    if (request.data) {
        request.data = [request.data.pokemon_species];
        sortByNumber(request.data[0]);
    }

    if (type && requestType.data) {
        const newPokemons = requestType.data.pokemon.map(pokemon => ({
            name: pokemon.pokemon.name,
            url: pokemon.pokemon.url
        }));

        request.data.push(newPokemons);
    }
    const [pokemonName, setPokemonName] = useState("");

    return (
        <S.Wrapper>
            <PokemonsContext.Provider value={{ request, setPokemonName, pokemonName }}>
                <S.ImageWrapper>
                    <S.FilterWrapper order="2">
                        <Filter value={setGeneration} text="GENERATIONS" radio={generations} />
                    </S.FilterWrapper>
                    <S.Image src={require("../../assets/imgs/poke2.png")} alt="Round image containing several pokemons" />
                    <S.FilterWrapper order="3">
                        <Filter value={setType} text="TYPES" radio={types} />
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

