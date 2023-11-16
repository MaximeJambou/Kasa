import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Slideshow from '../components/Slideshow';

function LodgingPage() {
    const { id } = useParams();
    const [lodgingData, setLodgingData] = useState(null);

    useEffect(() => {
        fetch('/data/logements.json')
            .then(response => response.json())
            .then(data => {
                // Trouver le logement spécifique par ID
                const selectedLodging = data.find(lodging => lodging.id === id);
                setLodgingData(selectedLodging);
            })
            .catch(error => console.error('Erreur lors du chargement des données du logement', error));
    }, [id]);

    return (
        <div>
        {lodgingData ? (
            <div>
                <Slideshow slides={lodgingData.pictures} />
            </div>
        ) : (
            <div>Chargement des données...</div>
        )}
    </div>
    );
}

export default LodgingPage;