import React, { useState, useMemo } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      return count * 5;
    },
    [count]
  );
  return (
    <>
      <h1>
        React. memo is a higher-order component provided by React, which aims to
        optimize the performance of React applications by reducing unnecessary
        re-rendering of components.
      </h1>
      <h1>This is a UseMemo</h1>
      <h2>Count:{count}</h2>
      <h2>item:{item}</h2>
      <h1>{multiCountMemo}</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>

      <button onClick={() => setItem(item * 10)}>Update item</button>
    </>
  );
}

export default Memo;
