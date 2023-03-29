import Modal from '../shared/Modal';
import StatusBar from '../StatusBar';
import * as S from './styles';
import { useAxios } from "../Hooks/useAxios";
import { useContext } from "react";
import { PokemonsContext } from "../../pages/main/index";
import Loader from '../shared/Loader';
import Error from '../shared/Error';

const CardDetails = ({ setModal }) => {
    let pokemons = useContext(PokemonsContext);
    let { currentID } = pokemons;
    let { request: { data, loading, error } } = useAxios(`https://pokeapi.co/api/v2/pokemon/${currentID}`)
    if (data) {
        pokemons.pokemon = data;
        console.log(pokemons.pokemon)
    };

    return (
        <Modal setModal={setModal}>
            {loading ? <Loader /> :
                (error ? <Error errorMsg={"Ups, something went wrong..."} /> :
                    (!data ? <Error errorMsg={"Sorry, can't find that pokemon..."} /> :
                        data &&
                        <S.Wrapper>
                            <S.CloseOutlineIcon size={32} color="#FF0000" onClick={setModal} />
                            <S.CardHeader>{pokemons.pokemon.name}</S.CardHeader>
                            <S.CardContent>
                                <S.CardImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemons.pokemon.id}.svg`} alt="pikachu" />
                                <S.CardDetails>
                                    <S.CardList>
                                        <h2>ID: {pokemons.pokemon.id}</h2>
                                    </S.CardList>
                                    <S.CardList>
                                        <h2>Type: {pokemons.pokemon.types[0].type.name}</h2>
                                    </S.CardList>
                                    <S.CardList>
                                        <h2>Height: {pokemons.pokemon.height}</h2>
                                    </S.CardList>
                                    <S.CardList>
                                        <h2>Weight: {pokemons.pokemon.weight}</h2>
                                    </S.CardList>
                                    <S.CardList>
                                        <h2>HP: </h2> <StatusBar hp="35" />
                                    </S.CardList>
                                    <S.CardList>
                                        <h2>Attack:</h2> <StatusBar att="55" />
                                    </S.CardList>
                                    <S.CardList>
                                        <h2>Defense:</h2><StatusBar def="40" />
                                    </S.CardList>
                                    <S.CardList>
                                        <h2>Speed:</h2> <StatusBar spd="90" />
                                    </S.CardList>

                                </S.CardDetails>

                            </S.CardContent>
                        </S.Wrapper>
                    )
                )
            }
        </Modal >
    );
};

export default CardDetails;

