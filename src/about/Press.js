import React from "react";

import "./Press.css";
import {
  pressEidsfossTitle,
  pressEidsfossLink,
  pressClaraLink,
  pressClaraTitle,
  pressSandbekkstuaLink,
  pressSandbekkstuaTitle,
  pressHolmsbueneLink,
  pressHolmsbueneTitle,
  pressWendaLink,
  pressWendaTitle,
  pressBoaTitle,
  pressBoaText,
  hasBeenTranslated,
} from "../resources/text";

function Press() {
  return (
    <div className="press navbar-spacing-submenu">
      <h1>Press</h1>
      <a href={pressEidsfossLink}>{pressEidsfossTitle}</a>
      <br />
      <a href={pressWendaLink}>{pressWendaTitle}</a>
      <br />
      <a href={pressSandbekkstuaLink}>{pressSandbekkstuaTitle}</a>
      <br />
      <a href={pressHolmsbueneLink}>{pressHolmsbueneTitle}</a>
      <br />
      <a href={pressClaraLink}>{pressClaraTitle}</a>
      <br />
      <h2>{pressBoaTitle}</h2>
      {pressBoaText.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <p style={{ fontStyle: "italic" }}>{hasBeenTranslated}</p>
    </div>
  );
}

export default Press;
