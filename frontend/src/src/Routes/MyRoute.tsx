import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "../website/pages/Article";
import MyNavbar from "../website/components/others/MyNavbar";
import MyFooter from "../website/components/others/MyFooter";
import About from "../website/pages/About";
import Contact from "../website/pages/Contact";
import Home from "../website/pages/Home";
import Scholarships from "../website/pages/Scholarships";
import Team from "../website/pages/Team";

function MyRoute() {
  return (
    <React.Fragment>
      <MyNavbar name="Study Baithak" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MyFooter />
    </React.Fragment>
  );
}

export default MyRoute;
