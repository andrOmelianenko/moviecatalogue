import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Informer = (props) => {
    const { isLoading, error } = props;

    const overlayClassName = classNames(
        'informer_overlay',
        (isLoading || error.length) && 'active'
    );

    const renderLoadingMsg = isLoading && (
        <span className="informer_msg">Loading data...</span>
    );

    const renderErrorMsg = !!error.length && (
        <span className="informer_msg">
            Sorry, can't get any data for you :(<br/>
            Reason: {error}
        </span>
    );

    return (
        <div className={overlayClassName}>
            {renderLoadingMsg}
            {renderErrorMsg}
        </div>
    );
};

Informer.propTypes = {
    isLoading: PropTypes.bool,
    error: PropTypes.string,
};

export default Informer;
