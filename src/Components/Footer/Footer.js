import React from "react";
import styles from "./Footer.module.css";
import logo from "./assets/footer_logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sub}>
        <div className={styles.section1}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <a href="mailto:blocsoc@acm.iitr.ac.in">
            <p>Contact us at: blocsoc@acm.iitr.ac.in</p>
          </a>
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
              <ul>
                <li>
                  <h4>Socials</h4>
                </li>
                <li>
                  <a href="https://discord.gg/Zvq3rpjBAB">Discord</a>
                </li>
                <li>
                  <a href="https://twitter.com/blocsociitr">Twitter</a>
                </li>
                <li>
                  <a href="https://medium.com/@blocsoc.acm">Medium</a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/company/blockchain-society-iit-roorkee">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/blocsociitr/">Instagram</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
