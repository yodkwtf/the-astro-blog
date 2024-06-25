import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <button className="btn" onClick={decrement}>
        -
      </button>
      <button className="btn" onClick={() => setCount(0)}>
        Reset
      </button>
      <button className="btn" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
