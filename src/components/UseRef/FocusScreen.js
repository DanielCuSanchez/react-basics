import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.select();
    console.log("REF", inputRef);
    //document.querySelector("input").select();
  };
  return (
    <div className="container">
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Nombre"
        className="form-control"
      />
      <button className="btn btn-primary btn-block my-2" onClick={handleClick}>
        onClick
      </button>
    </div>
  );
};
