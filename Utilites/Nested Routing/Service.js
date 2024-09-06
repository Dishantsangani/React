import React from "react";

import { Link } from "react-router-dom";

function Service() {
  return (
    <>
      <p>This is Service Page</p>
      <Link to="about">About</Link>
      <Link to="service">service</Link>
    </>
  );
}

export default Service;
