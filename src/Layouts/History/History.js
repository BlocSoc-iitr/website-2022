import React from 'react';
import styles from './History.module.css';
import image from './assets/image.svg';

const History = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                How far we have come?
            </div>
            <div className={styles.content}>
                We started with four core members who founded the group, later we expand to 15 core members in the start of 2022, currently we are a team of 28 members strong.
            </div>
            <img src={image} alt="" />
            <div className={styles.Text}>
                <div className={styles.numText}>
                    <div className={styles.num}>1000+</div>
                    <div className={styles.text}>active community <br /> members on discord</div>
                </div>
                <div className={styles.numText}>
                    <div className={styles.num}>05</div>
                    <div className={styles.text}>hackathons won <br /> over past</div>
                </div>
                <div className={styles.numText}>
                    <div className={styles.num}>28</div>
                    <div className={styles.text}>core team <br /> members</div>
                </div>
            </div>
        </div>
    );
};

export default History;