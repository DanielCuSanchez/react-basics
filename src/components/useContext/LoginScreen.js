import React, { useContext } from "react";

import { UserContext } from "./UserContext";

export const LoginScreen = (props) => {
  const context = useContext(UserContext);
  const { setUser } = context;

  const handleLogin = () => {
    const fakeUser = {
      id: 1234,
      name: "Daniel Cu Sanchez",
      username: "Dayer",
    };
    setUser(fakeUser);
    props.history.push("/");
    console.log(props);
  };

  return (
    <div className="container">
      <h1>Login Screen</h1>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
