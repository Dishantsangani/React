import React, { useContext } from "react";
import { NameContext, GenderContext } from "./Page";

function Page2() {
  const firstname = useContext(NameContext);
  const gender = useContext(GenderContext);

  return (
    <>
      <h1>This is the Second Page Of UseContext</h1>
      <p>
        Hi, my Name is {firstname} and my Gender is {gender}.
      </p>
    </>
  );
}

export default Page2;
