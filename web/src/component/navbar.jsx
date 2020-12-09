import React from "react";
import {
  Button,
  Form,
  Navbar,
  NavDropdown,
  Nav,
  FormControl,
} from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default class MyNavbar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/create">Create Event</Nav.Link>
          <Nav.Link href="/search">Search Event</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Button
          variant="outline-info"
          onClick={() => this.props.handleLogout()}
        >
          Log out
        </Button>
      </Navbar>
    );
  }
}
