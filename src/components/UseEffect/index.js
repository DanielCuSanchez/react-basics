import React, { useEffect, useState } from "react";
import { Mensaje } from "./Mensaje";

export const UseEffect = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;
  useEffect(() => {
    console.log("Hey");
  }, []);
  useEffect(() => {
    console.log("Formstate");
  }, [formState]);
  useEffect(() => {
    console.log("email");
  }, [email]);

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      <h1>Use Effect</h1>
      <hr />
      <div className="row justify-content-center">
        <div className=" d-flex">
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            placeholder="Tu nombre"
            onChange={handleInputChange}
            autoComplete="off"
          />
          <input
            className="form-control"
            type="text"
            name="email"
            value={email}
            placeholder="Tu correo"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
      </div>
      {name === "123" && <Mensaje />}
    </div>
  );
};
