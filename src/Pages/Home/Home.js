import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from './../../Layouts/Hero/Hero';
import Intro from './../../Layouts/Intro/Intro';
import History from '../../Layouts/History/History';
import Team from '../../Layouts/Team/Team';
import Gallery from '../../Layouts/Gallery/Gallery';
import Footer from '../../Components/Footer/Footer';
import styles from './Home.module.css';


const Home = (props) => {

    return (
        <>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <Hero />
            <Intro />
            <History />
            <Team />
            <Gallery />
            {/* <Footer /> */}
        </>
    );
};


export default Home;