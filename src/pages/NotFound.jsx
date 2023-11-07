import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFoundContainer'>
            <p className='notFoundContainer__number'>
                404
            </p>
            <p className='notFoundContainer__text'>
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="notFoundContainer__link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
};

export default NotFound;