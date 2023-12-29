import React from "react";

import "../Page.css";
import CardGrid from "./CardGrid";
import { paintings } from "../resources/paintings";
import { paintingsSubMenu } from "../resources/text";

function Paintings() {
  return (
    <div className="page">
      <CardGrid images={paintings} type={paintingsSubMenu[0]} />
    </div>
  );
}

export default Paintings;
