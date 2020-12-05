import React from "react";
import { Button, Form } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./register.css";


export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            registered: false,
        };
    }

    validateForm = () => {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.username + ' ' + this.state.password + ' ');

        axios.post('http://localhost:3001/register', {
            username: this.state.username,
            password: this.state.password,
        }).then((res) => {
            console.log(res);
            this.setState({ registered: true });
        });
    }

    render() {
        if (this.state.registered) {
            return (
                <Redirect to='/' />
            );
        }

        return (
            <div>
                <div className="Register">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group size="lg" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                autoFocus
                                value={this.state.username}
                                onChange={(e) => this.setState({ username: e.target.value })}
                            /> </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                            /> </Form.Group>
                        <Button block size="lg" type="submit" disabled={!this.validateForm()}> Register</Button>
                    </Form>
                </div>
            </div>
        );
    }
}