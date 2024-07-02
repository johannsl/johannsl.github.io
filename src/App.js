import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import "./App.css";
import { CV, Press, Statement } from "./about";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import { lowerCaseAndDashes } from "./functions/strings";
import ScrollToTop from "./functions/scrollToTop";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import {
  Linocuts,
  Paintings,
  Patterns,
  SmallerWorks,
  Slideshow,
} from "./paintings";
import {
  paintings,
  linocuts,
  smallerWorks,
  patterns,
  aboutSubMenu,
  navbarItems,
  paintingsSubMenu as pSubmenu,
} from "./resources";

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

          <Route exact path={`/${pSubmenu[1]}`} element={<Linocuts />} />
          <Route exact path={`/${pSubmenu[2]}`} element={<SmallerWorks />} />
          <Route exact path={`/${pSubmenu[3]}`} element={<Patterns />} />

          <Route exact path={`/${aboutSubMenu[0]}`} element={<Statement />} />
          <Route exact path={`/${aboutSubMenu[1]}`} element={<CV />} />
          <Route exact path={`/${aboutSubMenu[2]}`} element={<Press />} />

          {[paintings, linocuts, smallerWorks, patterns].map((data, index) => {
            return data.map((item) => {
              const type = pSubmenu[index];
              const path = `/${type}/${lowerCaseAndDashes(item.title)}`;
              const slideshow = (
                <Slideshow images={data} item={item} type={type} />
              );
              return <Route key={item.id} path={path} element={slideshow} />;
            });
          })}
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
