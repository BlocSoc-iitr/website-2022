import React from 'react';
import styles from './Intro.module.css';
import ReactPlayer from 'react-player';
const Intro = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                Who are We?
            </div>
            <div className={styles.content}>
                We are a group of Blockchain enthusiasts aiming to unite the blockchain community of IIT Roorkee, in a highly collaborative environment that is open for all. We are always open to collaborations on fun projects, and quirky discussions on crypto, Defi, Web3.0 and beyond.
            </div>
            <div className={styles.videoContainer}>
            <ReactPlayer
                controls
                width='60vw'
                height='69vh'
                url='https://www.youtube.com/watch?v=YRj5iM3pyfc'
                playing={true}
            />
            </div>
        </div>
    );
};

export default Intro;