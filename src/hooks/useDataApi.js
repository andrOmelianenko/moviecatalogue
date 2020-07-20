import { useState, useEffect } from 'react';
import api from '../api';

const useDataApi = (id) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
        setIsLoading(true);

        api.getById(id)
            .then(data => {
                setData(data);
                setIsLoaded(true);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(String(err));
                setIsLoading(false);
            });
    }, []);

    return { data, isLoaded, isLoading, error };
};

export default useDataApi;
