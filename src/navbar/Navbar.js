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
          let goto = item;
          if (item === navbarItems[2]) goto = aboutSubMenu[0]; // about goes to statement

          let to = item;
          if (item === navbarItems[0]) to = "/"; // home goes to root
          else if (item === navbarItems[2]) to = aboutSubMenu[0]; // about goes to statement

          return (
            <NavLink onClick={() => setPage(goto)} to={to} key={item}>
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
