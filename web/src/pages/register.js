import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./register.css";


export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            registered: false,
        };
    }

    validateForm = () => {
        return this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.username.length > 0 && this.state.password.length > 0 && this.state.email.length > 0;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.firstName + ' ' + this.state.lastName + ' ' + this.state.username + ' ' + this.state.password + ' ' + this.state.email);

        axios.post('http://3.135.218.245:3001/register', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
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
                <Redirect to='login' />
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