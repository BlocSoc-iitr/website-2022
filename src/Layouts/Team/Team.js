import React from "react";
import styles from "./Team.module.css";
import TeamCard from "../../Components/TeamCard/TeamCard";
import Data from "./Team_data";

const Team = (props) => {
  var data = Data.joint_secy;
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Meet the Team</div>
      <div className={styles.grid}>
        {data.map((m, index) => {
          return (
            <TeamCard
              index={index}
              Name={m.name}
              designation={m.designation}
              key={m.sl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
