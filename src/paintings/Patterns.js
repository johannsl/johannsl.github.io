import React from "react";

import CardGrid from "./CardGrid";
import { paintingsSubMenu } from "../resources/text";
import { patterns } from "../resources/patterns";

function Patterns() {
  return (
    <div className="navbar-spacing-submenu">
      <CardGrid
        images={patterns}
        type={paintingsSubMenu[3]}
        extraMargin={true}
      />
    </div>
  );
}

export default Patterns;
