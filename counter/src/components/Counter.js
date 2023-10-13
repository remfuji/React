import "./Counter.css";
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  const [trackDirection, setTrackDirection] = useState(false);

  useEffect(() => {
    if (count === 10 || count === 0) {
      setTrackDirection(!trackDirection);
    }
  }, [count]);
  function counterOnChange() {
    if (trackDirection) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={counterOnChange}>click</button>
    </>
  );
}

export default Counter;
