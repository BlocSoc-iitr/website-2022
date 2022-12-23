import React from "react";
import styles from "./Navbar.module.css";
import NavButtons from "../NavButton/NavButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <NavButtons str={"Home"} />
      </Link>
      <Link to="/projects">
        <NavButtons str={"Projects"} />
      </Link>
      <Link to="/events">
        <NavButtons str={"Events"} />
      </Link>
      <Link to="/resources">
        <NavButtons str={"Resources"} />
      </Link>
    </div>
  );
};


export default Navbar;
