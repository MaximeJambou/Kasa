import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
    const totalStars = 5;
    let stars = [];

    for (let i = 0; i < totalStars; i++) {
        stars.push(
            <i 
                key={i} 
                className={i < rating ? "fa-solid fa-star full-star" : "fa-solid fa-star empty-star"} 
            />
        );
    }

    return <div className="rating">{stars}</div>;
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired
};

export default Rating;