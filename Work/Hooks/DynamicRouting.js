import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function User() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  // Navigate's
  const navigate = useNavigate();
  const Handleclick = () => {
    navigate("/tag ", {
      replace: true,
      state: { name, pass },
    });
  };

  return (
    <>
      <Navbar />
      <h3>This is User Page</h3>
      <input
        type="text"
        // value={inputValue}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter some data"
      />
      <br />
      <input
        type="password"
        // value={inputpass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
      />
      <br />
      <button onClick={Handleclick}> Click Me</button>
    </>
  );
}

export default User;
