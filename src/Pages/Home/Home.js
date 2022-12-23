import React from 'react';
import Hero from './../../Layouts/Hero/Hero';
import Intro from './../../Layouts/Intro/Intro';
import History from '../../Layouts/History/History';
import Team from '../../Layouts/Team/Team';
import Gallery from '../../Layouts/Gallery/Gallery';
import Footer from '../../Components/Footer/Footer';


const Home = (props) => {

    return (
        <>
            <Hero />
            <Intro />
            <History />
            <Team />
            <Gallery />
            <Footer />
        </>
    );
};


export default Home;