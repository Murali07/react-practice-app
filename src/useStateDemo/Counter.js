import { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 2);
  };

  const handleDecrement = () => {
    setCount(count - 2);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counter-conatainer">
        <p className="counter-display">{count}</p>
        <button className="counter-button" onClick={handleIncrement}>Increment</button>
        <button className="counter-button" onClick={handleReset}>Reset</button>
        <button className="counter-button" onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default Counter;
