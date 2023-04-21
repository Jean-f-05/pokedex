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
                if (response.data.species) {
                    setData(response.data)
                }
            } catch (error) {
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