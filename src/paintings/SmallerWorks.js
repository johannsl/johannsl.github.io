import React from "react";

import CardGrid from "./CardGrid";
import { paintingsSubMenu } from "../resources/text";
import { smallerWorks } from "../resources/smallerWorks";

function SmallerWorks() {
  return (
    <div className="navbar-spacing-submenu">
      <CardGrid images={smallerWorks} type={paintingsSubMenu[2]} />
    </div>
  );
}

export default SmallerWorks;
