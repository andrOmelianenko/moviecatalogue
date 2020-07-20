import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    const { src, ...rest } = props;

    const handleSource = (src === 'N/A')
        ? <span className="no_image_msg">No image</span>
        : <img src={src} {...rest} />;

    return (
        <div className="image_wrapper">
            {handleSource}
        </div>
    );
};

Image.propTypes = {
    src: PropTypes.string,
};

export default Image;
