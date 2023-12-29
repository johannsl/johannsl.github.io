import React from "react";

import "../Page.css";
import CardGrid from "./CardGrid";
import { patterns } from "../resources/patterns";
import { paintingsSubMenu } from "../resources/text";

function Patterns() {
  return (
    <div className="page">
      <CardGrid images={patterns} type={paintingsSubMenu[1]} />
    </div>
  );
}

export default Patterns;
