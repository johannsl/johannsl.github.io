import React from "react";
import { useNavigate } from "react-router-dom";

import "./CardGrid.css";
import { lowerCaseAndDashes } from "../functions/strings";

function CardGrid({ images, type }) {
  const navigate = useNavigate();

  return (
    <div className="card-grid">
      {images.map((card) => (
        <div
          key={card.id}
          className="card"
          onClick={() => navigate(`/${type}/${lowerCaseAndDashes(card.title)}`)}
        >
          <img src={card.imageUrlSmall} loading="lazy" alt={card.title} />
          <p className="card-title">{card.title}</p>
          <p className="card-desc">{card.size}</p>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
