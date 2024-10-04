import axios from "axios";
import React, { useState, useEffect } from "react";

function Search() {
  const [fdata, setFdata] = useState([]);
  const [sinput, setSinput] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setFdata(res.data))
      .catch((err) => console.log("This is a API Error", err));
  }, []);

  const handlechange = (e) => {
    setSinput(e.target.value);
  };

  const filterdata = fdata.filter((item) =>
    item.title.toLowerCase().includes(sinput.toLowerCase())
  );
  return (
    <>
      <h1>Seach Function</h1>
      <input
        type="search"
        value={sinput}
        placeholder="Search Here"
        onChange={handlechange}
      />
      {filterdata.map((item, index) => (
        <div key={index}>
          <div>{item.title}</div>
          <div className="text-blue-600">{item.body}</div>
          <br />
        </div>
      ))}
    </>
  );
}

export default Search;
