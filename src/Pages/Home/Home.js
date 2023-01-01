import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from './../../Layouts/Hero/Hero';
import Intro from './../../Layouts/Intro/Intro';
import History from '../../Layouts/History/History';
// import Gallery from '../../Layouts/Gallery/Gallery';
import styles from './Home.module.css';


const Home = (props) => {

    return (
        <>
            <Hero />
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <Intro />
            <History />
            {/* <Gallery /> */}
            {/* <Footer /> */}
        </>
    );
};


export default Home;