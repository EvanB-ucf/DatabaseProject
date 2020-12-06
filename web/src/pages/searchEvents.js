import React from "react";
import { Button, Form } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventStart: '',
            eventEnd: '',
            eventCity: '',
        };
    }

    validateForm = () => {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // TODO: Verify correct port & this will need to be uploaded
        axios.post('http://localhost:3001/search', {
            eventStart: this.state.eventStart,
            eventEnd: this.state.eventEnd,
            eventCity: this.state.eventCity,
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        // TODO: Update this once we know our home login page
        if (this.state.loggedIn) {
            return (
                <Redirect to='/' />
            );
        }
        return (
            <div>
                <div className="Login">
                    <h1 className="header">Login</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group size="lg" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                autoFocus
                                value={this.state.username}
                                onChange={(e) => this.setState({ username: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                            />
                        </Form.Group>
                        <Button block size="lg" type="submit" disabled={!this.validateForm()}> Login </Button>
                    </Form>
                </div>
            </div>
        );
    }
}