import React from "react";

import CardGrid from "./CardGrid";
import { paintingsSubMenu } from "../resources/text";
import { linocuts } from "../resources/linocuts";

function Linocuts() {
  return (
    <div className="navbar-spacing-submenu">
      <CardGrid images={linocuts} type={paintingsSubMenu[1]} />
    </div>
  );
}

export default Linocuts;
