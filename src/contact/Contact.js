import React from "react";

import "./Contact.css";
import {
  contactText,
  contactTitle,
  emailText,
  emailTitle,
  phoneNumberText,
  phoneNumberTitle,
} from "../resources/text";

function Contact() {
  return (
    <div className="contact navbar-spacing">
      <h1>{contactTitle}</h1>
      {contactText.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <br />
      <p>
        {phoneNumberTitle}: {phoneNumberText}
      </p>
      <p>
        {emailTitle}: {emailText}
      </p>
    </div>
  );
}

export default Contact;
