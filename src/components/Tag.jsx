import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({tag}) => {
    return (
        <div className="tag">
            <p>{tag}</p>
        </div>
    );
};

Tag.propTypes = {
    tag: PropTypes.string.isRequired
};

export default Tag;