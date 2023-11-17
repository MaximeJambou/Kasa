import React from 'react';

const Host = ({ host }) => {
    // Destructuring pour décomposer le nom en prénom et nom de famille
    const [firstName, lastName] = host.name.split(' ');

    return (
        <div className="host">
            <div className="host__name">
                <p>{firstName}</p>
                <p>{lastName}</p>
            </div>
            <img src={host.picture} alt={`${host.name}`} className="host__picture" />
        </div>
    );
}

export default Host;
