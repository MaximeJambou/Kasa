
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ lodging }) => {
    return (
        <div className="card">
        <img src={lodging.cover} alt={lodging.title} />
        <h2>{lodging.title}</h2>
        </div>
    );
};

Card.propTypes = {
    lodging: PropTypes.shape({
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
};

export default Card;