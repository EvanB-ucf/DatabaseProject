import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import "../styles/EventCard.css";

export default class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      url: props.url,
      idEVENTS: props.idEVENTS,
      description: props.description,
      start_date: props.start_date,
      end_date: props.end_date,
    };
    this.canRegister = this.canRegister.bind(this);
  }

  canRegister() {
    const isSuperAdmin = localStorage.getItem("isSuperAdmin");
    if (isSuperAdmin === "true") {
      return <div />;
    } else {
      return (
        <Button
          block
          size="sm"
          type="button"
          variant="warning"
          style={{ display: "inlineBlock" }}
          onClick={this.handleUserRegisters}
        >
          Register
        </Button>
      );
    }
  }

  handleUserRegisters = () => {
    axios
      .post("http://localhost:3001/addevent", {
        loggedInUser: localStorage.getItem("username"),
        idEVENTS: this.state.idEVENTS,
      })
      .then((res) => {
        if (res.status && res.status === 201) {
          alert("Congrats you are registered for the event!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const startDateParsed = this.state.start_date.substring(0, 10);
    const endDateParsed = this.state.end_date.substring(0, 10);

    return (
      <div>
        <Card className="card">
          <Card.Header>{this.state.name}</Card.Header>
          <Card.Body>
            <Card.Title>URL: {this.props.url}</Card.Title>
            <Card.Title>Starts: {startDateParsed}</Card.Title>
            <Card.Title>Ends: {endDateParsed}</Card.Title>
            <Card.Text>Description: {this.state.description}</Card.Text>
            {this.canRegister()}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
