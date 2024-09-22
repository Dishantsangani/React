import React from "react";
import { useLocation } from "react-router-dom";

function UseLocation() {
  const location = useLocation();
  const { mydata } = location.state || {};
  console.log(location.key);
  console.log(location.hash);
  console.log(location.search);
  console.log(location.state);

  return (
    <>
      <p>the useLocation hook provides access to the current location object</p>
      <h1>This is A About Page</h1>
      <p>data Receives:{mydata}</p>
    </>
  );
}

export default UseLocation;
