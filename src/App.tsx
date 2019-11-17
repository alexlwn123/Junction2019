import React, { useState, useContext, useEffect } from "react";
import { Route, Switch, Router } from "react-router";
import Admin from "./components/Admin";
import "./App.css";
import Main from "./components/Main";
import Arcade from "./components/Arcade";
import { DataContext } from "./contexts/dataContext";


const App: React.FC = () => {
  const { data, dataService } = useContext(DataContext);
  useEffect(() => {
    dataService.getQuestions()
  },[])
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/dashboard" component={Admin} exact />
        <Route path="/arcade" component={Arcade} exact />
      </Switch>
    </div>
  );
};

export default App;
