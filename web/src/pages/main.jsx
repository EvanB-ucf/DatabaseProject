import { Switch, Route, Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";


import Event from "./event.jsx";
import Add from "./add.jsx";
import SearchBar from "../elements/searchBar.jsx"

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/HomePage" className="navbar-brand">
          Database
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/Event"} className="nav-link">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/Event"]} component={Event} />
          <Route exact path="/Add" component={Add} /> 
          <Route path="/HomePage/:id" component={HomePage} />
        </Switch>
      </div>
    
      <div>
        <SearchBar />
      </div>
      
    </div>
    );
  }
}