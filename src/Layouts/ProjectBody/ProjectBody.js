import React from 'react';
import styles from './ProjectBody.module.css';
import Header from '../../Components/Header/Header';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import List from './Project_List';
// import Button from '../../Components/Button/Button';


const ProjectBody = (props) => {

    var list = List.Project_List;
    return (
        <div className={styles.Body}>
            <Header />
            <div className={styles.container}>
                {list.map((m,index) => {
                    return(
                        <ProjectCard heading={m.heading} label={m.label} desc={m.desc} link={m.link} image={m.image} index={index} key={m.sl}/>
                    );
                })}
            </div>
        </div>
    );
};


export default ProjectBody;