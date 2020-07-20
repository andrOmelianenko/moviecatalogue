import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDataApi } from '../hooks';
import Informer from './informer';
import Image from './image';

const Movie = () => {
    const { id } = useParams();
    const { data, isLoading, isLoaded, error } = useDataApi(id);
    let content = null;

    if (isLoaded) {
        const { Title, Poster, Genre, Year, Plot, Ratings, ...rest } = data;
        const entries = Object.entries(rest);
        const unusedKeys = ['Response', 'imdbID'];

        const specsList = entries.map(element => !unusedKeys.includes(element[0])
            ? <p key={element[0]}><b>{element[0]}: </b>{element[1]}</p>
            : null
        );

        const ratingsList = Ratings.map(element => (
            <p key={element.Source}>{element.Source}: {element.Value}</p>
        ));

        content = (
            <>
                <div className="header">
                    <Link to="/" className="back">
                        Back to the search
                    </Link>
                </div>
                <div className="movie_wrapper">
                    <div className="movie_poster">
                        <Image
                            src={Poster}
                            alt={Title}
                        />
                    </div>
                    <div className="movie_info">
                        <h1>{Title}</h1>
                        <h3>{Genre}</h3>
                        <h3>{Year}</h3>
                        <hr/>
                        <p>{Plot}</p>
                        {specsList}
                        <div className="ratings">
                            {ratingsList}
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {content}
            <Informer
                isLoading={isLoading}
                error={error}
            />
        </>
    );
};

export default Movie;
