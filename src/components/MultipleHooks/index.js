import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const MultipleHooks = () => {
  const { counter, increment } = useCounter(1);
  const { err, loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/characters/${counter}`
  );
  const { char_id, name, nickname } = !!data && data[0];
  console.log(err, data);
  return (
    <div className="container">
      <h3>MultipleHooks</h3>
      <div className="row my-4 justify-content-center">
        {loading && (
          <div className="alert alert-info text-center">Loading....</div>
        )}
      </div>
      <div className="blockquote text right">
        <p className="mb-0">{nickname}</p>
        <p>{char_id}</p>
        <div className="blockquote-footer">{name}</div>
      </div>
      <button className="btn btn-primary" onClick={() => increment()}>
        Siguiente
      </button>
    </div>
  );
};
