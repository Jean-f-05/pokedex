import { useEffect, useState } from 'react';
import axios from 'axios';

export const useAxios = (customUrl) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(customUrl);
                if (response.data.pokemon_species) {
                    setData(response.data.pokemon_species)
                }
                if (response.data.pokemon) {
                    const newPokemons = response.data.pokemon.map(pokemon => ({
                        name: pokemon.pokemon.name,
                        url: pokemon.pokemon.url
                    }))
                    setData(newPokemons)
                }
            } catch (error) {
                console.log(error)
                setError(error);
                return
            } finally {
                setLoading(false);
            }
        };
        getData();

    }, [customUrl]);

    return { request: { data, loading, error } }
};


export const useAxiosII = (customUrl) => {
    const [dataII, setData] = useState(null);
    const [loadingII, setLoading] = useState(true);
    const [errorII, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(customUrl);
                /* setData(response.data); */
                console.log("RESPONSE", response)
                setData(prevState => ({ ...prevState, ...response.data }));
            } catch (error) {
                console.log(error)
                setError(error);
                return
            } finally {
                setLoading(false);
            }
        };
        getData();

    }, [customUrl]);

    return { requestII: { dataII, loadingII, errorII } }
};
