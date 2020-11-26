import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import HomePage from "./pages/main.js";

ReactDOM.render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
  document.getElementById("main")
);