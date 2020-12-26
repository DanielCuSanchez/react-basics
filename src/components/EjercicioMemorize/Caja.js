import React from "react";

export const Caja = React.memo(({ increment, valor }) => {
  console.log("Me renderice :(");
  return (
    <div className="card">
      <div className="card-title">{valor}</div>
      <button onClick={() => increment(valor)} className="btn btn-primary">
        Add
      </button>
    </div>
  );
});
