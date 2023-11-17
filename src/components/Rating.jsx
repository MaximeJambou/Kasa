// Rating.jsx
import React from 'react';

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

export default Rating;
