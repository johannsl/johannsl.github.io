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
        {navbarItems.map((item) => {
          let location = item;
          if (item === navbarItems[1]) location = paintingsSubMenu[0];
          else if (item === navbarItems[2]) location = aboutSubMenu[0];

          let pathname = item;
          if (item === navbarItems[0]) pathname = "/";
          else if (item === navbarItems[1]) pathname = paintingsSubMenu[0];
          else if (item === navbarItems[2]) pathname = aboutSubMenu[0];

          return (
            <NavLink onClick={() => setPage(location)} to={pathname} key={item}>
              {fromUrlToTitle(item)}
            </NavLink>
          );
        })}
      </ul>

      {paintingsSubMenu.includes(page) && (
        <ul className="submenu">
          {paintingsSubMenu.map((item) => (
            <NavLink to={`/${item}`} key={item}>
              {fromUrlToTitle(item)}
            </NavLink>
          ))}
        </ul>
      )}

      {aboutSubMenu.includes(page) && (
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
