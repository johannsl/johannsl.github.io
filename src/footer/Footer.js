import React from "react";

import "./Footer.css";
import {
  footerText,
  instagramLink,
  facebookLink,
  linkedInLink,
  atelieLink,
} from "../resources/text";

function Footer() {
  return (
    <div className="footer">
      <p className="footer-text">{footerText}</p>
      <div className="footer-icons">
        <a href={instagramLink} className="fa fa-instagram">
          <span>instagram</span>
        </a>
        <a href={facebookLink} className="fa fa-facebook">
          <span>facebook</span>
        </a>
        <a href={linkedInLink} className="fa fa-linkedin">
          <span>linkedin</span>
        </a>
        <a href={atelieLink} className="fa fa-paint-brush">
          <span>atelie.art</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
