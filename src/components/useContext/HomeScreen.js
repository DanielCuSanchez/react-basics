import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const context = useContext(UserContext);

  const { user } = context;

  return (
    <div className="container">
      <h1>Home Screen</h1>
      {JSON.stringify(user)}
    </div>
  );
};
