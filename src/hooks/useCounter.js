import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);
  if (counter < 0) {
    setCounter(0);
  }
  const increment = (factor = 1) => {
    setCounter(counter + factor);
  };
  const decrement = (factor = 1) => {
    setCounter(counter - factor);
  };
  const reset = () => {
    setCounter(initialState);
  };
  return {
    increment,
    decrement,
    reset,
    counter,
  };
};
