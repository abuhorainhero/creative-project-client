import React from 'react';
import Header from '../Header/Header';
import Logos from '../Logos/Logos';
import Services from '../Services/Services';
import WorkSlider from '../WorkSlider/WorkSlider';

const Home = () => {
    return (
        <main>
            <Header />
            <Logos />
            <Services />
            <WorkSlider />
        </main>
    );
};

export default Home;