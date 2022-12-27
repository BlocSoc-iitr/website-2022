import React from "react";
import styles from "./TeamCard.module.css";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";

const TeamCard = ({ Name, designation, index }) => {
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
      <div className={styles.image}></div>
      <div className={styles.details}>
        <div className={styles.name}>{Name}</div>
        <div className={styles.designation}>{designation}</div>
        <div className={styles.socials}>
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
