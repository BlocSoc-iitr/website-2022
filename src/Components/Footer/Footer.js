import React from 'react';
import styles from './Footer.module.css';
import logo from './assets/footer_logo.svg';

const Footer = () => {


    return (
        <div className={styles.container}>
            <div className={styles.sub}>
                <img src={logo} alt=""/>
                <div className={styles.footerItems}>
                <a href='mailto:blocsoc@acm.iitr.ac.in'><p>Contact us at: blocsoc@acm.iitr.ac.in</p></a>
                    <div className={styles.footerList}>
                        <ul>
                            <li>Home</li>
                            <li>Projects</li>
                            <li>Events</li>
                            <li>Resources</li>
                        </ul>
                        <ul>
                            <li>Discord</li>
                            <li>Twitter</li>
                            <li>Medium</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;