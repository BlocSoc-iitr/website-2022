import React from 'react';
import styles from './Team.module.css';
import TeamCard from '../../Components/TeamCard/TeamCard';

const Team = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                Meet the Team
            </div>
            <div className={styles.grid}>
                <div className={styles.card1}><TeamCard Name={"Samarendra Gouda"} designation={"Member"}/></div>
                <div className={styles.card2}><TeamCard Name={"Samarendra Gouda"} designation={"Member"}/></div>
                <div className={styles.card3}><TeamCard Name={"Samarendra Gouda"} designation={"Member"}/></div>
                <div className={styles.card4}><TeamCard Name={"Samarendra Gouda"} designation={"Member"}/></div>
            </div>
        </div>
    );
};

export default Team;