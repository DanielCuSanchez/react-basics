import React, { useState } from "react";

import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

export const MemoEjemplo = () => {
  const { increment, decrement, counter } = useCounter(0);
  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <h1>Memo counter</h1>
      <div className="row justify-content-center">
        <p>
          Counter: <Small counter={counter} />{" "}
        </p>
      </div>
      <div className="row justify-content-center">
        <button className="btn btn-primary" onClick={() => increment(1)}>
          Increment
        </button>
        <button className="btn btn-primary ml-4" onClick={() => decrement(1)}>
          Decrement
        </button>
        <button
          className="btn btn-outline-info ml-4"
          onClick={() => setShow(!show)}
        >
          Toggle {JSON.stringify(show)}
        </button>
      </div>
    </div>
  );
};
