import React from "react";
import FooterDesktop from "./FooterDesktop";

import FooterMobile from "./FooterMobile";

const Footer = () => {
  return (
    <div>{window.innerWidth > 768 ? (<FooterDesktop />) : (<FooterMobile />) }</div>
  );
};

export default Footer;
