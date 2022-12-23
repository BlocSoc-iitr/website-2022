import React from "react";
import styles from "./Hero.module.css";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";

const Hero = (props) => {
  return (
    <div className={styles.heroBody}>
      <Header />
      <div className={styles.container}>
        <div className={styles.textLarge}>Blockchain Society</div>
        <div className={styles.textLarge}>IIT Roorkee</div>
        <div className={styles.textSmall}>
          An Open Community to increase interaction among Blockchain enthusiasts
          and bitcoin-dev enthusiasts and to spread the word about 'Web 3.0'
        </div>
        <div className={styles.buttons}>
          <Button str={"View Projects"} />
          <Button str={"Browse Events"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
