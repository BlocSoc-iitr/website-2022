import React from 'react';
import styles from './Button.module.css';


const Button = ({str}) => {

    return (
        <div className={styles.container}>
            <p className={styles.text}>
                {str}
            </p>
        </div>
    );
};


export default Button;