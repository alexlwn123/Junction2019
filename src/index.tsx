import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { DataProvider } from "./contexts/dataContext";

const history = createBrowserHistory();

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <Router history={history}>
        <App />
      </Router>
    </BrowserRouter>
  </DataProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
