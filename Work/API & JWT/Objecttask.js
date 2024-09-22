import React, { useState } from "react";

function Objecttask() {
  const [count, setCount] = useState({
    name: "Dishant",
    lname: "Sangani",
  });

  // Update Value
  function update() {
    setCount({ name: "Dev", lname: "Patel" });
  }

  // Delete Value
  function deletehandler() {
    const Item = { ...count, lname: "", name: "" };
    delete Item.lname;
    setCount(Item);
  }

  // Add Value
  function Addhandler() {
    setCount({ ...count, address: "Nikol" });
  }

  return (
    <div>
      <h1>This is A Adding Object Propperty</h1>
      <p>
        My name is a {count.name} and my surname is {count.lname}
      </p>
      <p> My address is {count.address}</p>
      <p>
        <button onClick={update}>Update</button>
        <button onClick={deletehandler}>delete</button>
        <button onClick={Addhandler}>Add Value</button>
      </p>
    </div>
  );
}

export default Objecttask;
