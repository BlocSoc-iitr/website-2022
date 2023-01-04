import React from "react";
import styles from "./TeamCard.module.css";
import twitterLogo from "./assets/twitter.svg";
import linkedinLogo from "./assets/linkedin.svg";

const TeamCard = ({ Name, designation, index, twitter, linkedin, image }) => {
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
      <div className={styles.images}><img className={styles.image} src={`..${image}`} alt=""/></div>
      <div className={styles.details}>
        <div className={styles.name}>{Name}</div>
        <div className={styles.designation}>{designation}</div>
        <div className={styles.socials}>
          <a href={twitter} target={'_blank'}><img src={twitterLogo} alt="" /></a>
          <a href={linkedin} target={'_blank'}><img src={linkedinLogo} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
