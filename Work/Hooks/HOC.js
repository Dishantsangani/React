import React from "react";
import { useState } from "react";

function HOC() {
  return (
    <>
      <h1>
        HOC a function that takes a component and returns a new component with
        enhanced functionality
      </h1>
      <p>This is a Higher Order Component</p>

      <Higheroc cmp={Counter} />
      <Green cmp={Counter} />
    </>
  );
}
// 1. Hoc (Higher Order Component)
function Higheroc(props) {
  {
    return (
      <h2 style={{ backgroundColor: "red", width: "100px" }}>
        <props.cmp />
      </h2>
    );
  }
}
// 2. Part Of HoC(Higher Order Component)
function Green(props) {
  {
    return (
      <h2 style={{ backgroundColor: "green", width: "100px" }}>
        <props.cmp />
      </h2>
    );
  }
}
// Main Component
function Counter() {
  const [count, setCount] = useState(0);
  {
    return (
      <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>update</button>
      </div>
    );
  }
}
export default HOC;
