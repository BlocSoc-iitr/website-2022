import React from 'react';
import styles from './TeamCard.module.css';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin.svg';


const TeamCard = ({Name, designation}) => {

    return (
        <div className={styles.container}>
            <div className={styles.image}>

            </div>
            <div className={styles.details}>
                <div className={styles.name}>{Name}</div>
                <div className={styles.designation}>{designation}</div>
                <div className={styles.socials}>
                    <img src={twitter} alt=""/>
                    <img src={linkedin} alt=""/>
                </div>
            </div>
        </div>
    );
};


export default TeamCard;