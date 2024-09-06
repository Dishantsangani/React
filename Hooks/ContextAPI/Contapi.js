import React, { createContext } from "react";
import Contapi2 from "./Contapi2";
const data = createContext();
const data1 = createContext();
function Contapi() {
  const name = "DishantSangani";
  const gender = "Male";
  return (
    <>
      <h1>
        The Context API is a React feature that enables components to share
        values like user authentication, themes, or language settings across the
        entire app.
      </h1>
      <h1>This is main page of ContextAPI</h1>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <Contapi2 />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default Contapi;
export { data, data1 };
