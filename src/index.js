import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";
import AppWrapper from "./AppWrapper"; // همون Wrapper که i18n رو از URL می‌خونه

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:lng/*" element={<AppWrapper />} />
        <Route path="*" element={<AppWrapper />} />{" "}
        {/* مسیر بدون زبان یا اشتباه */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
