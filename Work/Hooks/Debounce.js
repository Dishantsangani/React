import React, { useCallback, useState } from "react";
import { DebounceInput } from "react-debounce-input";

function Debounce() {
  const [suggest, setSuggest] = useState("");

  function optimizze(value) {
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSuggest(json.data.items))
      .catch((error) => console.log(error));
  }

  function debounce(func) {
    let time;
    return function (...args) {
      const cont = this;
      if (time) clearTimeout(time);
      time = setTimeout(() => {
        time = null;
        func.apply(cont, args);
      }, 1000);
    };
  }

  const optimize = useCallback(debounce(optimizze));
  return (
    <>
      <div className="container">
        <h1>This is a Debounce </h1>
        <DebounceInput
          type="text"
          className="search"
          placeholder="Enter Something"
          debounceTimeout={5000}
          onChange={(e) => optimize(e.target.value)}
        />
        {suggest.length > 0 && (
          <div className="autocomplete">
            {suggest.map((el, i) => (
              <div key={i} className="autocompleteItems">
                <span>{el.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Debounce;
