import { useEffect, useState } from 'react';
import axios from 'axios';


export const useAxios = (customUrl, queryParams) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(customUrl, { params: queryParams });
                setData(response.data);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        };
        getData();
        //eslint-disable-next-line
    }, []);

    return { request: { data, loading, error } }
};


