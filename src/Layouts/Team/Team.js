import React from "react";
import styles from "./Team.module.css";
import TeamCard from "../../Components/TeamCard/TeamCard";
import Data from "./Team_data";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

const Team = (props) => {
  var joint_secy = Data.joint_secy;
  var third_year = Data.third_year;
  var second_year = Data.second_year;
  return (
    <div className={styles.Body}>
      <Header />
        <div className={styles.navbar}><Navbar /></div>
      <div className={styles.container}>
      <div className={styles.heading}>Meet the Team</div>
      <div className={styles.grid1}>
        {joint_secy.map((m, index) => {
          return (
            <TeamCard
              index={index}
              Name={m.name}
              designation={m.designation}
              twitter={m.twitter}
              linkedin={m.linkedin}
              image={m.image}
              key={m.sl}
            />
          );
        })}
      </div>
      <div className={styles.grid2}>
        {third_year.map((m, index) => {
          return (
            <TeamCard
              index={index}
              Name={m.name}
              designation={m.designation}
              twitter={m.twitter}
              linkedin={m.linkedin}
              image={m.image}
              key={m.sl}
            />
          );
        })}
      </div>
      <div className={styles.grid3}>
        {second_year.map((m, index) => {
          return (
            <TeamCard
              index={index}
              Name={m.name}
              designation={m.designation}
              twitter={m.twitter}
              linkedin={m.linkedin}
              image={m.image}
              key={m.sl}
            />
          );
        })}
      </div>
    </div>
    </div>
    
  );
};

export default Team;
