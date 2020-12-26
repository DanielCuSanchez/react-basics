import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

export const UseMemo = () => {
  const { increment, decrement, counter } = useCounter(2000);
  const [show, setShow] = useState(true);

  const procesoMemorizado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div className="container">
      <h1>Memo counter</h1>
      <div className="row justify-content-center">
        <p>
          Counter: <small className="display-2 text-muted"> {counter} </small>
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
      <div className="row">{procesoMemorizado}</div>
    </div>
  );
};
