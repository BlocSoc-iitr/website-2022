import React from "react";
import styles from "./BlogCard.module.css";
import Button from "../Button/Button";

const BlogCard = ({heading,desc,link,index}) => {
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
      <div className={styles.content}>
        <div className={styles.heading}>{heading}</div>
        <p className={styles.desc}>
          {desc}
        </p>
        <a href={link} target={'_blank'}><Button str={"Read Now"}/></a>
      </div>
    </div>
  );
};

export default BlogCard;
