import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Link to="./Hooks/UseREF.js ">About</Link>
          <Route path="/" element={<Files />} />
          <Route path="/name" element={<Name />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Useparams />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
