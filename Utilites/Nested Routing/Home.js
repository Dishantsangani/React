import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Service from "./Service";

function Home() {
  return (
    <>
      <p>This is Home Nested Routing</p>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
