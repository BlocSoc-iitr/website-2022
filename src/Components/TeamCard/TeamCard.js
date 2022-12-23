import React from 'react';
import styles from './TeamCard.module.css';


const TeamCard = ({Name, designation}) => {

    return (
        <div className={styles.container}>
            <div className={styles.image}>

            </div>
            <div className={styles.details}>
                <div className={styles.name}>{Name}</div>
                <div className={styles.designation}>{designation}</div>
                <div className={styles.socials}>Socials</div>
            </div>
        </div>
    );
};


export default TeamCard;