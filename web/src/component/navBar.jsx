import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSuperAdmin: localStorage.getItem('isSuperAdmin')
    };
  }

  logout = () => {
      localStorage.clear();
  }

  determineSuperPowerButton = () => {
    const isSuperAdmin = this.state.isSuperAdmin;
    let button;
    if (isSuperAdmin === 'true') {
      button = <div className="navbar-nav mr-auto"> <li className="nav-item">
        <Link to={"/searchuser"} className="nav-link">Search Users</Link></li></div>;
    } else {
      button = <div className="navbar-nav mr-auto"> <li className="nav-item"> <Link to={"/create"} className="nav-link">Create Event</Link></li></div>;
    }
    return button;
  }

  render() {
      return (
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">Home</a>
            <div>{this.determineSuperPowerButton()}</div>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/search"} className="nav-link">Search Events</Link>
              </li>
            </div>
            <div className="navbar-nav">
              <span className="user">{localStorage.getItem("username")}</span>
              <li className="nav-item">
                <Link to={"/logout"} className="nav-link">Log Out</Link>
              </li>
            </div>
          </nav>
      );
  }
}