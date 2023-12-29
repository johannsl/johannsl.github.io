import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink from react-router-dom

import "./Navbar.css";
import { navbarItems, paintingsSubMenu, aboutSubMenu } from "../resources/text";
import { fromUrlToTitle } from "../functions/strings";

function Navbar() {
  const location = useLocation();
  const [page, setPage] = useState(location.pathname.split("/")[1]);

  return (
    <div className="navbar">
      <ul>
        {navbarItems.map((item) => (
          <NavLink
            onClick={() => setPage(item)}
            to={item === "home" ? "/" : `/${item}`}
            key={item}
          >
            {fromUrlToTitle(item)}
          </NavLink>
        ))}
      </ul>

      {page === "paintings" && (
        <ul className="submenu">
          {paintingsSubMenu.map((item) => (
            <NavLink to={`/${item}`} key={item}>
              {fromUrlToTitle(item)}
            </NavLink>
          ))}
        </ul>
      )}
      {page === "about" && (
        <ul className="submenu">
          {aboutSubMenu.map((item) => (
            <NavLink to={`/${item}`} key={item}>
              {fromUrlToTitle(item)}
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
