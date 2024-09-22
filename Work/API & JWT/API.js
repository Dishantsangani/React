  import axios from "axios";
import React, { useEffect, useState } from "react";

function API() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const object = {};
  data.map((val) => (object[val.id] = val));
  const val = object[3];
  console.log(val);
  return (
    <>
      <h1>This is a New Data in Axios</h1>
      <table>
        <thead>
          <tr>
            <th>postId</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email </th>
            <th>button </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.postId}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => console.log(user)}>Get</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default API;
