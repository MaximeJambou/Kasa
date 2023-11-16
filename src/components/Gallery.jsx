import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

// Initialisation de l'état local avec une valeur de tableau vide
const Gallery = () => {
    const [lodgings, setLodgings] = useState([]);

    useEffect(() => {
        fetch('/data/logements.json')
            .then((response) => response.json())
            .then((data) => setLodgings(data))
            .catch((error) => console.error("Erreur lors du chargement des logements", error));
    }, []);

    return (
        <div className="gallery">
            {lodgings.map((lodging) => (
            <Link to={`/logement/${lodging.id}`} key={lodging.id}>
                <Card lodging={lodging} />
            </Link>
        ))}
        </div>
    );
};

export default Gallery;