import React from "react";
import { Row, Col, Nav, Tab } from "react-bootstrap";
import axios from "axios";
import "../styles/tabs.css";
import EventCard from "../component/eventCard";

export default class MyTabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "home",
      eventsUserRegistered: [],
      eventsUserOrganized: [],
    };

    this.fetchEventsRegistered();
    this.fetchEventsOrganized();
  }

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
        <div className="resultList">
          {" "}
          <ul> {eventResultsList} </ul>{" "}
        </div>
      );
    }

    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="tab">
                <Nav.Link eventKey="first">Events Registered </Nav.Link>
              </Nav.Item>
              <Nav.Item className="tab">
                <Nav.Link eventKey="second">events Organized</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">{eventUserRegisteredList}</Tab.Pane>
              <Tab.Pane eventKey="second">{eventUserOrganizedList}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
