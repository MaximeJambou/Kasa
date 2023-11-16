import { useParams, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Slideshow from '../components/Slideshow';

function LodgingPage() {
    const { id } = useParams();
    const [lodgingData, setLodgingData] = useState(null);

    useEffect(() => {
        fetch('/data/logements.json')
            .then(response => response.json())
            .then(data => {
                const selectedLodging = data.find(lodging => lodging.id === id);
                if (selectedLodging) {
                    setLodgingData(selectedLodging);
                } else {
                    setLodgingData(undefined);
                }
            })
            .catch(error => {
                console.error('Erreur lors du chargement des données du logement', error);
                setLodgingData(undefined);
            });
    }, [id]);

    // Si lodgingData est undefined, rediriger vers 404
    if (lodgingData === undefined) {
        return <Navigate replace to="/404" />;
    }

    if (lodgingData === null) {
        return <div>Chargement en cours...</div>;
    }

    // Rendre le composant normalement si les données sont présentes
    return (
        <div>
            <Slideshow slides={lodgingData.pictures} />
        </div>
    );
}

export default LodgingPage;
