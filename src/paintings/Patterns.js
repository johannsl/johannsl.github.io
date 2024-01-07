import React from "react";

import CardGrid from "./CardGrid";
import { patterns } from "../resources/patterns";
import { paintingsSubMenu } from "../resources/text";

function Patterns() {
  return (
    <div className="navbar-spacing-submenu">
      <CardGrid images={patterns} type={paintingsSubMenu[1]} />
    </div>
  );
}

export default Patterns;
