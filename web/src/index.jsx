import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("main")
);

/*
import HomePage from "./pages/main.js";
 within ReactDOM.render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
    document.getElementById("main")
    );
  */
