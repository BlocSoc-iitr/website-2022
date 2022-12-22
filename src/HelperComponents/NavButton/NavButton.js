import React from 'react';
import styles from './NavButton.module.css';



const NavButtons = ({str}) => {

    return (
        <div className={styles.container}>
            {str}
        </div>
    );
};


export default NavButtons;