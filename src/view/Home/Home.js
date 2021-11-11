import React from 'react';
import Categories from '../../Components/Categories/Categories';
import Featured from '../../Components/FeaturedSection/Featured';
import Footer from '../../Components/Footer/Footer';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Navbar from '../../Components/Navbar/Navbar';
import OwnerSection from '../../Components/OwnerSection/OwnerSection';
import PopularSection from '../../Components/PopularSection/PopularSection';

const Home = () => {
    return (
         < >
          <Navbar></Navbar>
          <HeroSection></HeroSection>
          <Featured></Featured>
          <PopularSection></PopularSection>
          <Categories></Categories>
          <OwnerSection></OwnerSection>
          <Footer></Footer>
        </> 
    );
};

export default Home;