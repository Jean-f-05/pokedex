import * as S from './styles';
import SearchBar from '../../components/SearchBar';
import Table from '../../components/Table';
import { useAxios } from '../../components/Hooks/useAxios';
import { createContext, useState } from 'react';
export const PokemonsContext = createContext({});

const Main = () => {
    let { request } = useAxios('https://pokeapi.co/api/v2/pokemon/', { limit: 151 });
    const [pokemonName, setPokemonName] = useState("");
    return (
        <S.Wrapper>
            <PokemonsContext.Provider value={{ request, setPokemonName, pokemonName }}>
                <S.ImageWrapper>
                    <S.Image src={require("../../assets/imgs/poke2.png")} alt="Round image containing several pokemons" />
                </S.ImageWrapper>
                <SearchBar />
                <Table />
                <S.Footer />
            </PokemonsContext.Provider>
        </S.Wrapper>
    );
};

export default Main;

