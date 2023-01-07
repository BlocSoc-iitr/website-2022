import React from 'react';
import styles from './FooterMobile.module.css';
import logo from "./assets/footerLogo_mobile.svg";
import { Link } from "react-router-dom";
import discord from "./assets/discord.svg";
import twitter from "./assets/twitter.svg";
import medium from "./assets/medium.svg";
import linkedin from "./assets/linkedin.svg";
import instagram from "./assets/instagram.svg";

const FooterMobile = (props) => {

    return (
        <div className={styles.container}>
      <div className={styles.sub}>
        <div className={styles.section1}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <p className={styles.tagline}>Demystifying one block at a time</p>
          <a href="mailto:blocsoc.acm@iitr.ac.in">
            <p>Contact us at: blocsoc@acm.iitr.ac.in</p>
          </a>
          <div className={styles.socials}>
            <a href='https://discord.gg/Zvq3rpjBAB' target={'_blank'}><img className={styles.icon} src={discord} alt="" /></a>
            <a href='https://twitter.com/blocsociitr' target={'_blank'}><img className={styles.icon} src={twitter} alt="" /></a>
            <a href='https://medium.com/@blocsoc.acm' target={'_blank'}><img className={styles.icon} src={medium} alt="" /></a>
            <a href='https://in.linkedin.com/company/blockchain-society-iit-roorkee' target={'_blank'}><img className={styles.icon} src={linkedin} alt="" /></a>
            <a href='https://www.instagram.com/blocsociitr/' target={'_blank'}><img className={styles.icon} src={instagram} alt="" /></a>
          </div>
        </div>
        <div className={styles.footerItems}>
          <div className={styles.footerList}>
              <ul>
                <li>
                  <h4>Navigation</h4>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;