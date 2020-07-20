import React from 'react';
import Poster from './poster';
import Informer from './informer';
import { useSearchApi } from '../hooks';
import { debounce } from '../utils';

const Catalogue = () => {
    const [{ data, isLoading, error }, searchData] = useSearchApi();
    const debouncedSearch = debounce(searchData, 400);

    const handleChange = e => {
        const trimmedValue = e.target.value.trim();
        trimmedValue && debouncedSearch(trimmedValue);
    }

    const postersList = data.map(element => (
        <Poster
            key={element.imdbID}
            id={element.imdbID}
            src={element.Poster}
            title={element.Title}
        />
    ));

    const renderNoDataMsg = !data.length && (
        <span className="no_data_msg">
            There are no movies to show now :)
        </span>
    );

    return (
        <>
            <div className="header">
                <input
                    id="input"
                    type="text"
                    placeholder="Search your movie here..."
                    onChange={handleChange}
                    className="search_input"
                />
            </div>
            <div className="grid_container">
                {renderNoDataMsg}
                {postersList}
            </div>
            <Informer
                isLoading={isLoading}
                error={error}
            />
        </>
    );
};

export default Catalogue;
