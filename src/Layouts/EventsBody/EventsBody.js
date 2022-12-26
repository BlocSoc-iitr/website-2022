import React from 'react';
import styles from './EventBody.module.css';
import Header from '../../Components/Header/Header';
import EventCard from '../../Components/EventCard/EventCard';
import List from "./Events_list";




const EventsBody = (props) => {
    const list = List.Event_list;
    return (
        <div className={styles.Body}>
            <Header />
            <div className={styles.container}>
                {list.map((m,index)=>{
                    return(
                        <EventCard name={m.eventName} date={m.date} venue={m.venue} desc={m.desc} link={m.link} index={index} key={m.eventName} />
                    );
                })}
            </div>
        </div>
    );
};


export default EventsBody;