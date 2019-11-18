import React, { useState, useContext, useEffect } from "react";
import { Route, Switch, Router } from "react-router";
import Admin from "./components/Admin";
import "./App.css";
import Main from "./components/Main";
import Arcade from "./components/Arcade";
import { DataContext } from "./contexts/dataContext";
import { PacmanGame, QuizzGame } from "./components/Game";
import Question from "./components/Question";


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
        <Route path="/" component={() => (<Arcade><Question /></Arcade>)} exact />
        <Route path="/pacman" component={PacmanGame} exact />
        <Route path="/quizz" component={QuizzGame} exact />
      </Switch>
    </div>
  );
};

export default App;
