import React from "react";
import styles from "./ProjectCard.module.css";
import Label from "../Label/Label"
import Button from "../Button/Button";

const ProjectCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}></div>
      <div className={styles.content}>
        <h3>Project Heading</h3>
        <div className={styles.label}>
          <Label str={"Project Label"} />
        </div>
        <p className={styles.desc}>Here we have to write description of the project, the prizes it won if build at some hackathon.</p>
        <Button str={"View Project"} />
      </div>
    </div>
  );
};

export default ProjectCard;
