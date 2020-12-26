import React, { useCallback, useState } from "react";
import { Caja } from "./Caja";

export const EjercicioMemorize = () => {
  const valores = [2, 4, 6, 8, 10];
  const [cuenta, setCuenta] = useState(0);

  //   const increment = (valor) => {
  //     setCuenta(cuenta + valor);
  //   };

  const increment = useCallback(
    (valor) => {
      setCuenta((cuenta) => setCuenta(cuenta + valor));
    },
    [setCuenta]
  );

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1>Ejercicio memorize</h1>
      </div>
      <div className="row justify-content-center">
        <small className="display-3 text-muted ">{cuenta}</small>
      </div>
      <div className="row justify-content-center">
        {valores.map((valor) => (
          <Caja key={valor} increment={increment} valor={valor} />
        ))}
      </div>
    </div>
  );
};
