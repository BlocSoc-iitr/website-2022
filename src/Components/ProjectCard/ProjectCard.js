import React from "react";
import styles from "./ProjectCard.module.css";
import Label from "../Label/Label";
import Button from "../Button/Button";

const ProjectCard = ({ heading, label, desc, link, image, index }) => {
  var containerClass;
  if (index % 3 === 0) {
    containerClass = styles.blueContainer;
  } else if (index % 3 === 1) {
    containerClass = styles.purpleContainer;
  } else if (index % 3 === 2) {
    containerClass = styles.yellowContainer;
  }
  return (
    <div className={containerClass}>
      <div><img className={styles.img} src={`..${image}`} /></div>
      <div className={styles.content}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.labels}>
          {label.map((m,index) => {
                    return(
                      <Label str={m.toString()} />
                    );
                })}
          
        </div>
        <p className={styles.desc}>{desc}</p>
        <a className={styles.link} href={link} target={'_blank'}><Button str={"View Project"} /></a>
      </div>
    </div>
  );
};

export default ProjectCard;
