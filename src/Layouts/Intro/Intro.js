import React from 'react';
import styles from './Intro.module.css';
import ReactPlayer from 'react-player';
// import { useState, useEffect } from 'react';


const Intro = (props) => {
    // const [isMobile, setIsMobile] = useState(false);

    // //choose the screen size
    // const handleResize = () => {
    //   if (window.innerWidth < 720) {
    //     setIsMobile(true);
    //   } else {
    //     setIsMobile(false);
    //   }
    // };

    // // create an event listener
    // useEffect(() => {
    //   window.addEventListener("resize", handleResize);
    // });
    return (
      <div className={styles.container}>
        <div className={styles.heading}>Who are We?</div>
        <div className={styles.content}>
          We are a group of Blockchain enthusiasts aiming to unite the
          blockchain community of IIT Roorkee, in a highly collaborative
          environment that is open for all. We are always open to collaborations
          on fun projects, and quirky discussions on crypto, Defi, Web3.0 and
          beyond.
        </div>
        <div className={styles.videoContainer}>
          {window.innerWidth > 756 ? (
            <ReactPlayer
              controls
              width="60vw"
              height="69vh"
              url="https://www.youtube.com/watch?v=YRj5iM3pyfc"
              playing={true}
              muted={true}
            />
          ) : (
            <ReactPlayer
              controls
              width="90vw"
              height="22vh"
              url="https://www.youtube.com/watch?v=YRj5iM3pyfc"
              playing={true}
              muted={true}
            />
          )}
        </div>
      </div>
    );
};

export default Intro;