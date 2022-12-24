import React from 'react';
import styles from './Label.module.css';

const Label = ({str}) => {

    return (
        <div className={styles.container}>
            <p className={styles.text}>
                {str}
            </p>
        </div>
    );
};


export default Label;