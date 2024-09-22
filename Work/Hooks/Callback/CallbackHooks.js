import React, { useCallback } from "react";
import { useState } from "react";
import Callback2 from "./Callback2";

function CallbackHooks() {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(0);
  const Learning = useCallback(() => {
    // Some Operation
  }, [add]);
  return (
    <>
      <h1>
        useCallback is a React Hook that lets you cache a function definition
        between re-renders.
      </h1>
      <h1>This is Usecallback Hooks</h1>
      <p>This is a {count}</p>
      <Callback2 learning={Learning} add={add} />
      <button onClick={() => setCount(count + 1)}>Add</button>
      <p>{add}</p>
      <button onClick={() => setAdd(add + 2)}>Mul</button>
    </>
  );
}

export default CallbackHooks;
