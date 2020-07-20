import { useState } from 'react';
import api from '../api';

const useSearchApi = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const searchData = (search) => {
        setError('');
        setIsLoading(true);

        api.search(search)
            .then(({ Search, Error, Response }) => {
                if (Response === 'True') {
                    setData(Search);
                } else {
                    setData([]);
                    setError(Error);
                }

                setIsLoading(false);
            })
            .catch((err) => {
                setError(String(err));
                setIsLoading(false);
            })
    };

    return [
        { data, isLoading, error },
        searchData,
    ];
};

export default useSearchApi;
