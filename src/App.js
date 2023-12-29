import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Paintings from "./paintings/Paintings";
import { navbarItems, paintingsSubMenu } from "./resources/text";
import { paintings } from "./resources/paintings";
import { patterns } from "./resources/patterns";
import { lowerCaseAndDashes } from "./functions/strings";
import Slideshow from "./paintings/Slideshow";
import Patterns from "./paintings/Patterns";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={`/${navbarItems[1]}`} element={<Paintings />} />
          {/* <Route path={`/${navbarItems[2]}`} element={<Paintings />} />
          <Route path={`/${navbarItems[3]}`} element={<Paintings />} /> */}

          <Route
            exact
            path={`/${paintingsSubMenu[1]}`}
            element={<Patterns />}
          />

          {paintings.map((item) => (
            <Route
              key={item.id}
              path={`/${paintingsSubMenu[0]}/${lowerCaseAndDashes(item.title)}`}
              element={
                <Slideshow
                  images={paintings}
                  item={item}
                  type={paintingsSubMenu[0]}
                />
              }
            />
          ))}
          {patterns.map((item) => (
            <Route
              key={item.id}
              path={`/${paintingsSubMenu[1]}/${lowerCaseAndDashes(item.title)}`}
              element={
                <Slideshow
                  images={patterns}
                  item={item}
                  type={paintingsSubMenu[1]}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
