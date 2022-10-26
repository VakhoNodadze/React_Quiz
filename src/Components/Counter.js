import React from 'react';
import { useState } from 'react';

function Counter(props) {
  const [counter, setCounter] = useState(props.defaultValue);

  return (
    <>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(prev => prev + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCounter(prev => prev - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default Counter;
