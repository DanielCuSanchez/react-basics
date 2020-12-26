import React from "react";
import "./App.css";
//import { TodoApp } from "./components/TodoApp";
import { MainApp } from "./components/useContext/MainApp";
//import { EjercicioMemorize } from "./components/EjercicioMemorize";
//import { UseMemo } from "./components/UseMemo";
//import { MemoEjemplo } from "./components/MemoEjemplo";
//simport { MultipleHooks } from "./components/MultipleHooks";
//import { FocusScreen } from "./components/UseRef/FocusScreen";
//import { RealExampleRef } from "./components/UseRef/RealExampleRef";
//import { UseState } from "./components/UseState"
//import { UseCounter } from './componentUs/UseCounter'
//import { UseEffect } from "./components/UseEffect";
//import { FormWithCustomHook } from "./components/UseEffect/FormWithCustomHook";

//import { UseCallback } from "./components/UseCallback";
//import { UseReducerIntro } from "./helpers/useReducerIntro";

function App() {
  return (
    <div className="container text-center">
      {/* <h1>React Hooks App</h1> */}
      <MainApp />
      <div className="container">
        <div className="row">{/* Paste here the components */}</div>
      </div>
    </div>
  );
}

export default App;
