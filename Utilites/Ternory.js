import React from "react";

function Ternory() {
  // Using If Else Statements
  let a = 18;
  if (a <= 10) {
    console.log("This is Using If Statement");
  } else {
    console.log("This is else Statement");
  }
  // Using Single line Statement
  let b = a <= 10 ? "True" : "false";
  console.log(b);
  return (
    <>
      <h1>
        A ternary operator is a conditional operator in programming that takes
        three operands and evaluates an expression based on a condition.
      </h1>
      <h1>This is a Ternory Operator's</h1>
      <p>Open In Console</p>
    </>
  );
}

export default Ternory;
