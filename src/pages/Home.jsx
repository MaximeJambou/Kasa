import React from 'react';
import Banner from '../components/Banner';
import homeImage from "../assets/images/homeBanner.png"

const Home = () => {
  return (
    <Banner image={homeImage}>
        <h1>Chez vous, partout et aiileurs</h1>
    </Banner>
  )
};

export default Home;