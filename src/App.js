import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Paintings from "./paintings/Paintings";
import {
  aboutSubMenu,
  navbarItems,
  paintingsSubMenu as pSubmenu,
} from "./resources/text";
import { paintings } from "./resources/paintings";
import { patterns } from "./resources/patterns";
import { lowerCaseAndDashes } from "./functions/strings";
import Slideshow from "./paintings/Slideshow";
import SmallerWorks from "./paintings/SmallerWorks";
import Footer from "./footer/Footer";
import Statement from "./about/Statement";
import CV from "./about/CV";
import Press from "./about/Press";
import Contact from "./contact/Contact";
import ScrollToTop from "./functions/scrollToTop";
import { smallerWorks } from "./resources/smallerWorks";

function App() {
  return (
    <HashRouter>
      <div>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={`/${navbarItems[1]}`} element={<Paintings />} />
          <Route exact path={`/${navbarItems[3]}`} element={<Contact />} />

          <Route exact path={`/${pSubmenu[1]}`} element={<SmallerWorks />} />

          <Route exact path={`/${aboutSubMenu[0]}`} element={<Statement />} />
          <Route exact path={`/${aboutSubMenu[1]}`} element={<CV />} />
          <Route exact path={`/${aboutSubMenu[2]}`} element={<Press />} />

          {paintings.map((item) => {
            const path = `/${pSubmenu[0]}/${lowerCaseAndDashes(item.title)}`;
            const slideshow = (
              <Slideshow images={paintings} item={item} type={pSubmenu[0]} />
            );
            return <Route key={item.id} path={path} element={slideshow} />;
          })}

          {smallerWorks.map((item) => {
            const path = `/${pSubmenu[1]}/${lowerCaseAndDashes(item.title)}`;
            const slideshow = (
              <Slideshow images={smallerWorks} item={item} type={pSubmenu[1]} />
            );
            return <Route key={item.id} path={path} element={slideshow} />;
          })}
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
