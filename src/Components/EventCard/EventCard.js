import React from "react";
import styles from "./EventCard.module.css";
import Button from "../Button/Button";

const EventCard = ({ name, date, venue, desc, link,image, index }) => {
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
        <div className={styles.heading}>{name}</div>
        <div className={styles.label}>
          <p>
            {date} <br /> {venue}{" "}
          </p>
        </div>
        <p className={styles.desc}>{desc}</p>
        <a className={styles.link} href={link}>
          <Button str={"View Recording"} />
        </a>
      </div>
    </div>
  );
};

export default EventCard;
