import React from "react";
import { data, data1 } from "./Contapi";
function Contapi2() {
  return (
    <>
      <p>This is Secound Page Of ContextAPI</p>
      <data.Consumer>
        {(name) => {
          return <h1>My Name IS {name}</h1>;
        }}
      </data.Consumer>
      <data1.Consumer>
        {(gender) => {
          return <h1>My Gender is {gender}</h1>;
        }}
      </data1.Consumer>
    </>
  );
}

export default Contapi2;
