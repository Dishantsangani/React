import React, { useState, useEffect, useCallback } from "react";

// Throttle function
const throttle = (func, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
};

const ThrottleExample = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  const throttledHandleScroll = useCallback(throttle(handleScroll, 200), [
    handleScroll,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [throttledHandleScroll]);

  return (
    <div>
      <div style={{ height: "150vh", padding: "20px" }}>
        <h2>Scroll down to see the throttle in action</h2>
        <p>Current Scroll Position: {scrollPosition}</p>
      </div>
    </div>
  );
};

export default ThrottleExample;
