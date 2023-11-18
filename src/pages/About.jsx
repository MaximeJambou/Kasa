import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import aboutImage from '../assets/images/aboutBanner.png'

const About = () => {
    return (
        <>
            <Banner image={aboutImage} />

            <div className="about__container">
                <Collapse title="Fiabilité" >
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </Collapse>
                <Collapse title="Respect" >
                    La bienveillance fait partie des fondatrices de Kasa.
                    Tout comportement discriminatoire du voisinage entraînera uen exclusion de notre plateforme.
                </Collapse>
                <Collapse title="Service" >
                    La bienveillance fait partie des fondatrices de Kasa.
                    Tout comportement discriminatoire du voisinage entraînera uen exclusion de notre plateforme.
                </Collapse>
                <Collapse title="Sécurité" >
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                    correspond aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </Collapse>
            </div>
        </>
    )
};

export default About;