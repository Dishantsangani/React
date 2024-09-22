import axios from "axios";
import React, { useEffect, useState } from "react";

function APIGetdata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //   Map
  // let Object = {};
  // data.map((value) => (Object[value.id] = value));
  // let value = Object[3];
  // console.log(value);

  //   Filter
  let err = {};
  data.filter((val) => (err[val.id] = val));
  let val = err[5];
  console.log(val);

  //   Foreach Loop
  // let red = {};
  // data.forEach((val) => (red[val.id] = val));
  // let val = red[2];
  // console.log(val);

  //   Reduce;
  // const obj = data.reduce((index, value) => {
  //   index[value.id] = value;
  //   return index;
  // }, {});
  // let val = obj[5];
  // console.log(val);

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
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default APIGetdata;
