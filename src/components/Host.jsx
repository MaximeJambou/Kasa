import React from 'react';
import PropTypes from 'prop-types';

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

Host.propTypes = {
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    }).isRequired
};

export default Host;