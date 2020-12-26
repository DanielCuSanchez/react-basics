import React, { useState } from "react";
import { MultipleHooks } from "../MultipleHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <h1>Real example ref</h1>
      <button className="my-5 btn btn-dark" onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <MultipleHooks />}
    </div>
  );
};
