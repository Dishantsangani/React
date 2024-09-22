import React, { useReducer } from "react";

const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
function Reducer() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <h1>
        A useReducer is a hook in React that allows you add a reducer to your
        component
      </h1>
      <h1>This is The Reducer Hooks</h1>
      <div>count {count}</div>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
    </>
  );
}

export default Reducer;
