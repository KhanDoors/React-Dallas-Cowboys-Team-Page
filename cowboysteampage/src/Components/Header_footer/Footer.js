import React from "react";
import { CowboyLogo } from "../ui/icons";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CowboyLogo width="70px" height="70px" link={true} linkTo="/" />
      </div>
      <div className="footer_discl">
        KhanDoor Media 2018.All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
