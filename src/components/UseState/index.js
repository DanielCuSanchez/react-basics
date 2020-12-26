import React, { useState } from "react";

export const UseState = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
  });
  const { counter1, counter2 } = counter;
  const handleAdd = () => {
    setCounter({ ...counter, counter1: counter1 + 1 });
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div className="container text-center text-light bg-success">
      <h1>Counter</h1>
      <div className="row justify-content-center">
        <div>Counter 1: {counter1}</div>
        <div className="ml-4">Counter 2: {counter2}</div>
        {/* <div className="badge badge-danger p-4 m-4">
          <p className="display-4">{counter}</p>
        </div> */}
      </div>
      <div className="row justify-content-center">
        <button className="btn btn-primary btn-lg" onClick={handleAdd}>
          +1
        </button>
        <button className="btn btn-secondary btn-lg" onClick={handleAdd}>
          -1
        </button>
        <button className="btn btn-primary btn-lg" onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
};
