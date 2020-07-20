import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Image from './image';

const Poster = (props) => {
    const { id, src, title } = props;
    const { push } = useHistory();

    const handleClick = () => push(`/movie/${id}`);

    return (
        <div
            onClick={handleClick}
            className="poster"
        >
            <Image src={src} alt={title} />
            <p className="title">{title}</p>
        </div>
    );
};

Poster.propTypes = {
    id: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string,
};

export default Poster;
