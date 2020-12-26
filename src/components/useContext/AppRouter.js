import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { Navbar } from "./Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={AboutScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/" component={HomeScreen} exact />
      </Switch>
    </Router>
  );
};
