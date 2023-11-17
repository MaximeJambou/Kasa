import { useParams, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import Host from '../components/Host';

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
        <div className='lodging-page'>
            <Slideshow slides={lodgingData.pictures} />
            <div className='lodging-info'>
                <div className='lodging-info__title'>
                    <h1>{lodgingData.title}</h1>
                    <p className='lodging-info__title--location'>{lodgingData.location} </p>
                    <div className='lodging-info__title--tags'>
                    {lodgingData.tags.map(tag => (
                        <Tag key={tag} tag={tag} />
                    ))}
                    </div>
                </div>

                <div className='lodging-info__host&ratings'>
                    <Host host={lodgingData.host} />
                </div>
            </div>


        </div>
    );
}

export default LodgingPage;
