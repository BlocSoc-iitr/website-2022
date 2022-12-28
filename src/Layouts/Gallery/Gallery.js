import React from 'react';
import styles from './Gallery.module.css';
import {TwitterTweetEmbed} from 'react-twitter-embed';

const Gallery = (props) => {

    return (
      <div className={styles.container}>
        <div className={styles.heading}>Wall of Love</div>
        <div className={styles.content}>
          <TwitterTweetEmbed className={styles.tweet} tweetId={"1523673836645847042"} />
        </div>
      </div>
    );
};

export default Gallery;