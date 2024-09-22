import React, { useState } from "react";

function Changearay() {
  let fruits = [
    { name: "apple" },
    { name: "mango" },
    { name: "Kiwi" },
    { name: "Orange" },
    { name: "Grapes" },
  ];
  let [list, setList] = useState(fruits);

  let removehandler = (e) => {
    let x = e.target.getAttribute("removeFruits");
    setList(list.filter((items) => items.name !== x));
  };
  return (
    <>
      <h1>This is a New Array Update</h1>
      {list.map((x) => {
        return (
          <div>
            {x.name}
            <button removeFruits={x.name} onClick={removehandler}>
              X
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Changearay;
