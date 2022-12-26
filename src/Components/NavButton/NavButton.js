import React from 'react';
import styles from './NavButton.module.css';
import { useLocation } from 'react-router-dom';



const NavButtons = ({str,path}) => {
    const {pathname} = useLocation();
    var containerClass;

    if( pathname === path ){
        containerClass = styles.activeContainer;
    }
    else {containerClass = styles.container};
    return (
        <div className={containerClass}>
            <div className={styles.text}>{str}</div>
        </div>
    );
};


export default NavButtons;