import React, { createContext } from "react";
import Dat from "./Page2";

// Create contexts with unique names
const NameContext = createContext();
const GenderContext = createContext();

function Page() {
  const name = "Dishant";
  const gender = "Male";

  return (
    <>
      <h1>
        Usecontext: allows components to consume state or context without the
        need for prop drilling
      </h1>
      <h1>This Is Main UseContext</h1>
      <NameContext.Provider value={name}>
        <GenderContext.Provider value={gender}>
          <Dat />
        </GenderContext.Provider>
      </NameContext.Provider>
    </>
  );
}

export default Page;
export { NameContext, GenderContext };
