import { useEffect, useState } from 'react';
import axios from 'axios';


export const useAxios = (customUrl, queryParams) => {
    /* const dataFetchedRef = useRef(false); */
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        /*  if (dataFetchedRef.current) return; */

        const getData = async () => {
            try {
                const response = await axios.get(customUrl, { params: queryParams });
                setData(response.data);
                /* setData(prevState => ({ ...prevState, ...response.data })); */
                console.log("RESPONSEDATA", data)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        console.log("YUPICO!")
        getData();
        /* dataFetchedRef.current = true; */
        //eslint-disable-next-line
    }, [customUrl]);

    return { request: { data, loading, error } }
};


