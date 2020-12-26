import React, { useEffect, useState } from "react";

export const Mensaje = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    //console.log("Componente montado");
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      //console.log(coords);
      setCoords(coords);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      console.log("Componente desmontado");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <div className="container my-4">
      <h2>Hey, soy un mensaje</h2>
      <div className="row justify-content-center">
        <p>{JSON.stringify(coords)}</p>
      </div>
    </div>
  );
};
