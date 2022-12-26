import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import EventsBody from '../../Layouts/EventsBody/EventsBody';
import styles from './Events.module.css';



const Events = (props) => {

    return (
        <>
             <div className={styles.navbar}>
                <Navbar />
            </div>
            <EventsBody />
            {/* <Footer /> */}
        </>
    );
};


export default Events;