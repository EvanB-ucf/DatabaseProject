import { Switch, Route, Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

import Event from "./event";
import Add from "./add";
import CreateEvent from './createEvent';


export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/HomePage" className="navbar-brand">Database</a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/search"} className="nav-link">Search Events</Link>
            </li>
            <li className="nav-item">
              <Link to={"/create"} className="nav-link">Create Event</Link>
            </li>
          </div>
        </nav>

        {/* <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/Event"]} component={Event} />
            <Route exact path="/Add" component={Add} />
            <Route path="/HomePage/:id" component={HomePage} />
             <Route exact path="/create" component={CreateEvent} />
          </Switch>
        </div> */}
      </div>
    );
  }
}