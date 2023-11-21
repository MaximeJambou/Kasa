import { useParams, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';

function LodgingPage() {
    const { id } = useParams();
    const [lodgingData, setLodgingData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/logements.json')
            .then(response => response.json())
            .then(data => {
                const selectedLodging = data.find(lodging => lodging.id === id);
                if (selectedLodging) {
                    setLodgingData(selectedLodging);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Erreur lors du chargement des données du logement', error);
                setLoading(false);
            });
    }, [id]);

    // Si lodgingData est undefined, rediriger vers 404
    

    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    if (lodgingData === null) {
        return <Navigate replace to="/404" />;
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

                <div className='lodging-info__host'>
                    <Host host={lodgingData.host} />
                    <Rating rating={lodgingData.rating} />
                </div>
            </div>

            <div className='lodging-collapses'>
                <div className="lodging-collapses__container">
                    <Collapse title="Description" >
                        {lodgingData.description}
                    </Collapse>
                </div>
                <div className="lodging-collapses__container">
                    <Collapse title="Équipements" >
                        {lodgingData.equipments.map((equipment, index) => (
                            <p key={index}>{equipment}</p>
                        ))}
                    </Collapse>
                </div>     
            </div>          

        </div>
    );
}

export default LodgingPage;
