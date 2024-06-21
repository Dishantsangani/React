import React, { useState } from "react";

export default function HomeHeader() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Home page</h1>
      <div>Cart: {count}</div>
      <HomeChild increaseCount={increaseCount} />
    </div>
  );
}

function HomeChild({ increaseCount }) {
  const submit = () => {
    // Call the function passed from the parent to increase the count
    increaseCount();
    console.log("Item added to cart");
  };

  return (
    <div>
      <h2>I am Child of home</h2>
      <button onClick={submit}>Add To Cart</button>
    </div>
  );
}
