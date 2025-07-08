import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import { lowerCaseAndDashes } from "../functions/strings";
import "./Slideshow.css";

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

  // keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      nextSlide();
      event.preventDefault();
    } else if (event.key === "ArrowLeft") {
      prevSlide();
      event.preventDefault();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  // app swipe navigation
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const soldOrGifted = item.sold ? "SOLD" : item.gifted ? "GIFTED" : "";
  return (
    <div className="image-container" {...handlers}>
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
