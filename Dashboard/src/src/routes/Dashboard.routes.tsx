import React from "react";
import { Routes, Route } from "react-router-dom";
import MySunEditor from "../components/CreateArticle/MySunEditor";
import CreateArticle from "../pages/CreateArticle";
import Articles from "../pages/Articles";
function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CreateArticle />} />
      <Route path="/editor" element={<MySunEditor />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
}

export default MyRoutes;
