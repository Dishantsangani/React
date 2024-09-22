import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <p>This is a About Page</p>
      <Link to="home">Home</Link>
      <Link to="service">service</Link>
    </>
  );
}

export default About;
