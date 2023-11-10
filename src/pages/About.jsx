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
                    Lorem ipsum dolor sit amet. 
                </Collapse>
                <Collapse title="Respect" >
                    Lorem ipsum dolor sit amet.
                </Collapse>
                <Collapse title="Service" >
                    Lorem ipsum dolor sit amet.
                </Collapse>
                <Collapse title="Sécurité" >
                Lorem ipsum dolor sit amet..
                </Collapse>
            </div>
        </>
    )
};

export default About;