import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
// import Navbar from '../Navbar/Navbar';
import logo from './assets/logo_1.svg';



const Header = () => {

    return (
        <div className={styles.container}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt=""/>
            </Link>            
            {/* <Navbar /> */}
            <a className={styles.discord} target={'_blank'} href='https://discord.gg/Zvq3rpjBAB'><p>Join us on Discord</p></a>
        </div>
    );
};


export default Header;