import { API_URL, API_KEY } from '../constants';

const handleFetch = (queryParam, value) => fetch(
    `${API_URL}/?apikey=${API_KEY}&${queryParam}=${encodeURIComponent(value)}`
).then(res => res.json());

export default {
    search: search => handleFetch('s', search),
    getById: id => handleFetch('i', id),
};
