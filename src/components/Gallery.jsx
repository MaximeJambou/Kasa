import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

// Initialisation de l'état local avec une valeur de tableau vide
const Gallery = () => {
    const [lodgings, setLodgings] = useState([]);

    useEffect(() => {
        fetch('/data/logements.json')
            .then((response) => response.json())
            .then((data) => setLodgings(data))
            .catch((error) => console.error("Erreur lors du chargement des lodgings", error));
    }, []);

    return (
        <div className="gallery">
            {lodgings.map((lodging) => (
                <Card key={lodging.id} lodging={lodging} />
            ))}
        </div>
    );
};

export default Gallery;