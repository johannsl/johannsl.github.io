import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Paintings from "./paintings/Paintings";
import { aboutSubMenu, navbarItems, paintingsSubMenu } from "./resources/text";
import { paintings } from "./resources/paintings";
import { patterns } from "./resources/patterns";
import { lowerCaseAndDashes } from "./functions/strings";
import Slideshow from "./paintings/Slideshow";
import Patterns from "./paintings/Patterns";
import Footer from "./footer/Footer";
import Statement from "./about/Statement";
import CV from "./about/CV";
import Press from "./about/Press";
import Contact from "./contact/Contact";
import ScrollToTop from "./functions/scrollToTop";

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={`/${navbarItems[1]}`} element={<Paintings />} />
          <Route exact path={`/${navbarItems[3]}`} element={<Contact />} />

          <Route
            exact
            path={`/${paintingsSubMenu[1]}`}
            element={<Patterns />}
          />

          <Route exact path={`/${aboutSubMenu[0]}`} element={<Statement />} />
          <Route exact path={`/${aboutSubMenu[1]}`} element={<CV />} />
          <Route exact path={`/${aboutSubMenu[2]}`} element={<Press />} />
          {/* <Route exact path={`/${aboutSubMenu[3]}`} element={<Contact />} /> PHOTOS*/}

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
      <Footer />
    </Router>
  );
}

export default App;
