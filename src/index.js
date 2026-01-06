import React from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import AppWrapper from "./AppWrapper";
import { HashRouter, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/:lng" element={<AppWrapper />} />
        <Route path="*" element={<AppWrapper />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
