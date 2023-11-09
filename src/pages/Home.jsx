import React from 'react';
import Banner from '../components/Banner';
import homeImage from "../assets/images/homeBanner.png"
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <>
      <Banner image={homeImage}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <Gallery />
    </>
  )
};

export default Home;