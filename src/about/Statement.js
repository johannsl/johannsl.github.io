import React from "react";

import "./Statement.css";
import { statementTitle, statementText } from "../resources/text";

function Statement() {
  return (
    <div className="statement navbar-spacing-submenu">
      <h1>{statementTitle}</h1>
      {statementText.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default Statement;
