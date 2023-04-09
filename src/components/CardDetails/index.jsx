import Modal from '../shared/Modal';
import StatusBar from '../StatusBar';
import * as S from './styles';
import { useAxios } from "../Hooks/useAxios";
import { useContext } from "react";
import { PokemonsContext } from "../../pages/main/index";
import Loader from '../shared/Loader';
import Error from '../shared/Error';

const CardListElement = ({ label, description, value, color }) => {
    return (
        <S.CardList>
            <S.CardListHeader>{label}</S.CardListHeader>
            {value && <StatusBar description={label} value={value} color={color} />}
            {description && <S.CardListDetail>{description}</S.CardListDetail>}
        </S.CardList>
    )
};

const CardDetails = ({ setModal }) => {
    let pokemons = useContext(PokemonsContext);
    let { currentID } = pokemons;
    let { request: { data, loading, error } } = useAxios(`https://pokeapi.co/api/v2/pokemon/${currentID}`)
    if (data) {
        pokemons.pokemon = data;
    };

    return (
        <Modal setModal={setModal}>
            {loading ? <Loader /> :
                (error ? <Error errorMsg={"Ups, something went wrong..."} /> :
                    (!data ? <Error errorMsg={"Sorry, can't find that pokemon..."} /> :
                        data &&
                        <S.Wrapper border={pokemons.pokemon.types[0].type.name}>
                            <S.CloseOutlineIcon size={36} color="#FF0000" onClick={setModal} />

                            <S.CardContent>
                                <S.CardMain>
                                    <S.CardHeader>{pokemons.pokemon.name}</S.CardHeader>
                                    <S.CardImage src={pokemons.pokemon.sprites.other.dream_world.front_default ? pokemons.pokemon.sprites.other.dream_world.front_default : pokemons.pokemon.sprites.other.home.front_default} alt={pokemons.pokemon.name} />
                                </S.CardMain>
                                <S.CardDetails>
                                    <S.CardList>
                                        <CardListElement label="Id" description={pokemons.pokemon.id} />
                                    </S.CardList>
                                    <S.CardList>
                                        <CardListElement label="Type" description={pokemons.pokemon.types[0].type.name} />
                                    </S.CardList>
                                    <S.CardList>
                                        <CardListElement label="Height" description={pokemons.pokemon.height} />
                                    </S.CardList>
                                    <S.CardList>
                                        <CardListElement label="Weight" description={pokemons.pokemon.weight} />
                                    </S.CardList>
                                    {pokemons.pokemon.stats.map(stat => (
                                        <S.CardList
                                            key={pokemons.pokemon.name + "_" + pokemons.pokemon.id}>
                                            <CardListElement
                                                label={stat.stat.name}
                                                value={stat.base_stat}
                                                color={pokemons.pokemon.types[0].type.name}
                                            />
                                        </S.CardList>
                                    ))}
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

