import React from 'react';
import styles from './Navbar.module.css';
import NavButtons from '../NavButton/NavButton';

const Navbar = () => {

    return (
        <div className={styles.container}>
            <NavButtons str={"Home"} />
            <NavButtons str={"Projects"} />
            <NavButtons str={"Events"} />
            <NavButtons str={"Resources"} />
        </div>
    );
};

export default Navbar;