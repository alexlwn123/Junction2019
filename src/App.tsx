import React, { useState, useContext, useEffect } from "react";
import { Route, Switch, Router } from "react-router";
import Admin from "./components/Admin";
import "./App.css";
import Main from "./components/Main";


const App: React.FC = () => {

  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/dashboard" component={Admin} exact />
      </Switch>
    </div>
  );
};

export default App;
