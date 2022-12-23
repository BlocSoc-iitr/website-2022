import React from 'react';
import styles from './Videos.module.css';
import VideoCard from '../../Components/VideoCard/VideoCard';




const Videos = (props) => {

    return (
        <div className={styles.Body}>
            <div className={styles.heading}>Videos</div>
            <div className={styles.container}>
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    );
};


export default Videos;