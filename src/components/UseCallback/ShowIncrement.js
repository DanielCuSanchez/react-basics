import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("ShowIncrement renderized");
  return (
    <button className="btn btn-success" onClick={() => increment(5)}>
      Increment
    </button>
  );
});
