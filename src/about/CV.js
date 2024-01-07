import React from "react";

import "./CV.css";
import {
  educationTitle,
  educationText,
  artJobsTitle,
  artJobsText,
  soloExhibitionsTitle,
  soloExhibitionsText,
  groupExhibitionsTitle,
  groupExhibitionsText,
  galleryContactTitle,
  galleryContactText,
  publicPurchasesTitle,
  publicPurchasesText,
  consultancyTitle,
  consultancyText,
  membershipsTitle,
  membershipsText,
  commissionsTitle,
  commissionsText,
  positionsTitle,
  positionsText,
} from "../resources/text";

function CV() {
  return (
    <div className="cv navbar-spacing-submenu">
      <h1>{educationTitle}</h1>
      {educationText.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <h1>{artJobsTitle}</h1>
      {artJobsText.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <h1>{soloExhibitionsTitle}</h1>
      {soloExhibitionsText.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <h1>{groupExhibitionsTitle}</h1>
      {groupExhibitionsText.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <h1>{galleryContactTitle}</h1>
      {galleryContactText.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <h1>{publicPurchasesTitle}</h1>
      {publicPurchasesText.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <h1>{consultancyTitle}</h1>
      {consultancyText.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <h1>{membershipsTitle}</h1>
      {membershipsText.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <h1>{commissionsTitle}</h1>
      {commissionsText.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <h1>{positionsTitle}</h1>
      {positionsText.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <p></p>
    </div>
  );
}

export default CV;
