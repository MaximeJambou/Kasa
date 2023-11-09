import React from 'react';

const Card = ({ lodging }) => {
    return (
        <div className="card">
        <img src={lodging.cover} alt={lodging.title} />
        <h2>{lodging.title}</h2>
        </div>
    );
};

export default Card;