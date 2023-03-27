import * as S from './styles';
import { useContext } from "react";
import { PokemonsContext } from "../../pages/main/index"

const SearchBar = () => {

    let pokemons = useContext(PokemonsContext);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        pokemons.setPokemonName(evt.target.pokemon.value)
    };

    const handleChange = (evt) => {
        evt.preventDefault();
        if (evt.target.value.length === 0) {
            pokemons.setPokemonName("")
        }
    };

    return (
        <S.Wrapper>
            <S.InputWrapper onSubmit={handleSubmit}>
                <S.Label htmlFor='pokemon'>Looking for a pokemon?</S.Label>
                <S.Input placeholder='Pokemon name or number...' id='pokemon' type="text" name="pokemon" onChange={handleChange} />
            </S.InputWrapper>
        </S.Wrapper>
    );
};

export default SearchBar;

