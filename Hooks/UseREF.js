import React, { useRef, useState } from "react";
function UseREF(props) {
  console.log(props);
  const [data, setData] = useState();

  let sem = useRef(null);

  function Hide() {
    console.log("Password Was Hide...?");
    sem.current.style.color = "white";
  }

  function Show() {
    console.log("Password Was Show");
    sem.current.style.color = "black";
  }
  return (
    <>
      <h1>
        useRef is a React Hook that lets you reference a value that's not needed
        for rendering.
      </h1>
      <h1>This is a UseRef</h1>
      <input type="text" ref={sem} />
      <button onClick={Hide}>Hide</button>
      <button onClick={Show}>Show</button>
    </>
  );
}

export default UseREF;
