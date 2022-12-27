import React from 'react';
import styles from './Videos.module.css';
import VideoCard from '../../Components/VideoCard/VideoCard';
import Video_list from './Video_list';



const Videos = (props) => {
    const list = Video_list.Video_list;
    return (
        <div className={styles.Body}>
            <div className={styles.container}>
            <div className={styles.heading}>Videos</div>
            <div className={styles.sub}>
                {list.map((m,index)=>{
                    return(
                        <VideoCard heading={m.heading} desc={m.desc} link={m.link} index={index} key={m.heading} />
                    );
                })}
            </div>
            </div>
            
        </div>
    );
};

export default Videos;