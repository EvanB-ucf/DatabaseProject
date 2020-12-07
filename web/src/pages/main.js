import { Link, Redirect } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isSuperAdmin: localStorage.getItem('isSuperAdmin'),
    };
    this.superAdminSuperPowerButton = this.superAdminSuperPowerButton.bind(this);
  }

  superAdminSuperPowerButton() {
    const isSuperAdmin = this.state.isSuperAdmin;
    let button;
    if (isSuperAdmin === 'true') {
      button = <div className="navbar-nav mr-auto"> <li className="nav-item">
        <Link to={"/searchuser"} className="nav-link">Search Users</Link></li></div>;
    } else {
      button = <div />;
    }
    return button;
  }

  render() {
    if (localStorage.getItem('loggedIn') === null || localStorage.getItem('loggedIn') === false) {
      return (
        <Redirect to='/login' />
      );
    }

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">Home</a>
          <div>{this.superAdminSuperPowerButton()}</div>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/search"} className="nav-link">Search Events</Link>
            </li>
            <li className="nav-item">
              <Link to={"/create"} className="nav-link">Create Event</Link>
            </li>
          </div>
        </nav>
      </div>
    );
  }
}