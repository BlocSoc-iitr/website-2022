import React from 'react';
import styles from './EventCard.module.css'
import Button from '../Button/Button';


const EventCard = (props) => {

    return (
      <div className={styles.container}>
        <div className={styles.img}></div>
        <div className={styles.content}>
          <h3>Event Name</h3>
          <div className={styles.label}>
            <p>13 September 2022 <br /> Room No. 104, New LHC </p>
            
          </div>
          <p className={styles.desc}>
            Here we should write details of the event like what it is about and any necessary details.
          </p>
          <Button str={"View Recording"} />
        </div>
      </div>
    );
};

export default EventCard;