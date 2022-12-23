import React from 'react';
import styles from './NavButton.module.css';



const NavButtons = ({str}) => {

    return (
        <div className={styles.container}>
            <div className={styles.text}>{str}</div>
        </div>
    );
};


export default NavButtons;