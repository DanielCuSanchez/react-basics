import React, { useCallback, useState } from "react";

import { ShowIncrement } from "./ShowIncrement";

export const UseCallback = () => {
  const [contador, setContador] = useState(0);

  // const increment = () => {
  //   setContador(contador + 1);
  // };

  const increment = useCallback(
    (num = 1) => {
      setContador((c) => c + num);
    },
    [setContador]
  );

  //Segundo caso de uso useEffect

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [increment])

  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <h1>Use Callback</h1>
      </div>
      <div className="row justify-content-center">
        <p>
          Contador <small className="display-2 text-muted">{contador}</small>
        </p>
      </div>
      <ShowIncrement className="btn btn-primary" increment={increment} />
    </div>
  );
};
