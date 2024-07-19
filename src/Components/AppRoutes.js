import React from "react";
import { Routes, Route } from "react-router-dom";
import Youtube from "./youtube/youtube_down";
import Instagram from "./instagram/instagram";
import Facebook from "./facebook/facebook";
import NoPage from "./error";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Youtube />} />
      <Route path="/youtube" element={<Youtube />} />
      <Route path="/instagram" element={<Instagram />} />
      <Route path="/facebook" element={<Facebook />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRoutes;
