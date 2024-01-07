import React from "react";

import "./Home.css";
import homeImage from "../resources/photos/home-image.jpeg";
import { homeTitle, homeText } from "../resources/text";

function Home() {
  return (
    <div className="home navbar-spacing">
      <h1>{homeTitle}</h1>
      <img src={homeImage} alt={"Astrid Slettevold"} />
      <div className="home-text">
        {homeText.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
}

export default Home;
