import React from "react";
import styles from "./ProjectCard.module.css";
import Label from "../Label/Label"

const ProjectCard = (props) => {
  return (
    <div className={styles.container}>
      <img />
      <div className={styles.content}>
        <div className={styles.label}>
          <Label str={"Project Label"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
