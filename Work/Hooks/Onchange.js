import React from "react";

function Onchange() {
  const handleinput = () => {};
  return (
    <>
      <h1>
        React onChange is an event handler that triggers when there is any
        change in the input field
      </h1>
      <h1>Enter Some Value Inside</h1>
      <input type="text" onChange={(e) => handleinput()} />
      <h1>Show In Something in console</h1>
    </>
  );
}

export default Onchange;
