import { useState } from "react";

import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};

export default Counter;
