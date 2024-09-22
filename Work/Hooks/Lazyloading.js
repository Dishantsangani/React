import React, { Suspense } from "react";
import "./App.css";
// import Lazyloading from "./Utilites/Lazyloading";
const Lazy = React.lazy(() => import("./Utilites/Lazyloading"));
function App() {
  return (
    <>
      <p>
        Lazy Loading in React JS helps to optimize the performance of React
        applications. The data is only rendered when visited or scrolled it can
        be images, scripts, etc.
      </p>
      <Suspense fallback={<div>Loading Data...</div>}>
        <Lazy />
      </Suspense>
    </>
  );
}

export default App;
