import React from 'react';
import styles from './ProjectBody.module.css';
import Header from '../../Components/Header/Header';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
// import Button from '../../Components/Button/Button';


const ProjectBody = (props) => {

    return (
        <div className={styles.Body}>
            <Header />
            <div className={styles.container}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
};


export default ProjectBody;