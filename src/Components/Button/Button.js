import React from 'react';
import styles from './Button.module.css';


const Button = ({str}) => {

    return (
      <div className={styles.button}>
        <button className={styles.container}>
          <div className={styles.text}>{str}</div>
        </button>
      </div>
    );
};


export default Button;