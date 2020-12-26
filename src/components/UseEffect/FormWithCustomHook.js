import React from "react";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  const [values, handleInputChange] = useForm({
    name: "",
    password: "",
    email: "",
  });
  const { name, email, password } = values;
  console.log(values);
  return (
    <div className="container">
      <h1>FormWithCustomHook</h1>
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
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            placeholder="****"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};
