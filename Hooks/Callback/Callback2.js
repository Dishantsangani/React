import React, { memo } from "react";

function Callback2({ Learning, add }) {
  console.log("This is Calback Hook");
  return (
    <>
      <h1>This is Related Page of Callback Hook</h1>
    </>
  );
}

export default memo(Callback2);
