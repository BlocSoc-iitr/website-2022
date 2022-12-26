import React from 'react';
// import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ProjectBody from '../../Layouts/ProjectBody/ProjectBody';
import styles from './Projects.module.css';


const Projects = (props) => {

    return (
        <>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <ProjectBody />
            {/* <Footer /> */}
        </>
    );
};


export default Projects;