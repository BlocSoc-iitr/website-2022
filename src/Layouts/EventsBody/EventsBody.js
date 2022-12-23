import React from 'react';
import styles from './EventBody.module.css';
import Header from '../../Components/Header/Header';
import EventCard from '../../Components/EventCard/EventCard';




const EventsBody = (props) => {

    return (
        <div className={styles.Body}>
            <Header />
            <div className={styles.container}>
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    );
};


export default EventsBody;