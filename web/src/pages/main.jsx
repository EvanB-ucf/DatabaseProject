import { Link, Redirect } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import EventCard from "../component/eventCard";
import NavBar from "../component/navBar.jsx";
import axios from 'axios';
import MyTabs from "../component/tabs.jsx";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem("username"),
      isSuperAdmin: localStorage.getItem("isSuperAdmin"),
      eventsUserRegistered: [],
      eventsUserOrganized: [],
    };

    this.fetchEventsRegistered();
    this.fetchEventsOrganized();
  }

  logout = () => {
    this.setState({
        username: "",
        isSuperAdmin: false,
        eventsUserRegistered: [],
        eventsUserOrganized: []
    });
    localStorage.clear();
  }

  determineSuperPowerButton = () => {
    const isSuperAdmin = this.state.isSuperAdmin;
    let button;
    if (isSuperAdmin === "true") {
      button = (
        <div className="navbar-nav mr-auto">
          {" "}
          <li className="nav-item">
            <Link to={"/searchuser"} className="nav-link">
              Search Users
            </Link>
          </li>
        </div>
      );
    } else {
      button = (
        <div className="navbar-nav mr-auto">
          {" "}
          <li className="nav-item">
            {" "}
            <Link to={"/create"} className="nav-link">
              Create Event
            </Link>
          </li>
        </div>
      );
    }
    return button;
  };

  fetchEventsRegistered = () => {
    axios
      .post("http://localhost:3001/searchuser", {
        loggedInUser: localStorage.getItem("username"),
        usernameSearch: localStorage.getItem("username"),
        searchedUserQueryType: "registered",
      })
      .then((res) => {
        this.setState({ eventsUserRegistered: res.data.events });
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleLogOut = () => {
    this.setState({
      username: "",
      isSuperAdmin: false,
      eventsUserRegistered: [],
      eventsUserOrganized: [],
    });
  };

  fetchEventsOrganized = () => {
    axios
      .post("http://localhost:3001/searchuser", {
        loggedInUser: localStorage.getItem("username"),
        usernameSearch: localStorage.getItem("username"),
        searchedUserQueryType: "organized",
      })
      .then((res) => {
        this.setState({ eventsUserOrganized: res.data.events });
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (
      localStorage.getItem("loggedIn") === null ||
      localStorage.getItem("loggedIn") === false
    ) {
      return <Redirect to="/login" />;
    }

    let eventUserRegisteredList, eventUserOrganizedList;
    if (this.state.eventsUserRegistered) {
      const eventRegisteredList = this.state.eventsUserRegistered.map(
        (event) => {
          return (
            <li key={event.idEVENTS}>
              <EventCard
                name={event.name}
                url={event.url}
                idEVENTS={event.idEVENTS}
                description={event.description}
                start_date={event.start_date}
                end_date={event.end_date}
              />
            </li>
          );
        }
      );
      eventUserRegisteredList = (
        <div>
          {" "}
          <ul> {eventRegisteredList} </ul>{" "}
        </div>
      );
    }

    if (this.state.eventsUserOrganized) {
      const eventResultsList = this.state.eventsUserOrganized.map((event) => {
        return (
          <li key={event.idEVENTS}>
            <EventCard
              name={event.name}
              url={event.url}
              idEVENTS={event.idEVENTS}
              description={event.description}
              start_date={event.start_date}
              end_date={event.end_date}
            />
          </li>
        );
      });
      eventUserOrganizedList = (
        <div>
          {" "}
          <ul> {eventResultsList} </ul>{" "}
        </div>
      );
    }

    return (
      <div>
        <NavBar></NavBar>
        <div>
          <MyTabs></MyTabs>
        </div>
      </div>
    );
  }
}
