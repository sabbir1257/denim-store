import React from 'react';
import HeroSection from '../components/HeroSection';
import Categorys from '../components/Categorys';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Categorys/>
            <FeaturedProducts/>
        </div>
    );
};

export default Home;