import React from 'react';
import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';
import logo from './assets/logo_1.svg';



const Header = () => {

    return (
        <div className={styles.container}>
            <img src={logo} alt=""/>
            <Navbar />
            <p>Join us on Discord</p>
        </div>
    );
};


export default Header;