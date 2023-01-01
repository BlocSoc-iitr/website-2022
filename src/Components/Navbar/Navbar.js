import React from "react";
import styles from "./Navbar.module.css";
import NavButtons from "../NavButton/NavButton";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div className={styles.container}>
      <NavLink className={styles.link} to="/">
        <NavButtons str={"Home"} path={"/"} />
      </NavLink>
      <NavLink className={styles.link} to="/projects">
        <NavButtons str={"Projects"} path={"/projects"} />
      </NavLink>
      <NavLink className={styles.link} to="/events">
        <NavButtons str={"Events"} path={"/events"} />
      </NavLink>
      <NavLink className={styles.link} to="/resources">
        <NavButtons str={"Resources"} path={"/resources"} />
      </NavLink>
      <NavLink className={styles.link} to="/team">
        <NavButtons str={"Team"} path={"/team"} />
      </NavLink>
    </div>
  );
};


export default Navbar;
