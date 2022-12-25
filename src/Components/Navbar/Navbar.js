import React from "react";
import styles from "./Navbar.module.css";
import NavButtons from "../NavButton/NavButton";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className={styles.container}>
      <Link to="/">
        <NavButtons str={"Home"} path={"/"} />
      </Link>
      <Link to="/projects">
        <NavButtons str={"Projects"} path={"/projects"} />
      </Link>
      <Link to="/events">
        <NavButtons str={"Events"} path={"/events"} />
      </Link>
      <Link to="/resources">
        <NavButtons str={"Resources"} path={"/resources"} />
      </Link>
    </div>
  );
};


export default Navbar;
