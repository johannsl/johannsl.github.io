import React from "react";
import { useNavigate } from "react-router-dom";

import "./Slideshow.css";
import { lowerCaseAndDashes } from "../functions/strings";

function Slideshow({ images, item, type }) {
  const navigate = useNavigate();
  const nextSlide = () => {
    const nextId = (item.id + 1) % images.length;
    navigate(`/${type}/${lowerCaseAndDashes(images[nextId].title)}`);
  };
  const prevSlide = () => {
    const prevId = (item.id - 1 + images.length) % images.length;
    navigate(`/${type}/${lowerCaseAndDashes(images[prevId].title)}`);
  };
  const soldOrGifted = item.sold ? "SOLD" : item.gifted ? "GIFTED" : "";

  return (
    <div className="image-container">
      <button className="arrow prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img src={item.imageUrl} alt={item.title} className="large-image" />
      <div className="top-left">{item.title}</div>
      <div className="top-right">{item.size}</div>
      <div className="bottom-left">{item.date}</div>
      <div className="bottom-right">{soldOrGifted}</div>
      <button className="arrow next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Slideshow;
