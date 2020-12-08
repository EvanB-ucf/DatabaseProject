import React from "react";
import { Button, Form } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./loginPage.css";

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectToHome: false,
        };
    }

    validateForm = () => {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // TODO: Verify correct port & this will need to be uploaded
        axios.post('http://localhost:3001/login', {
            username: this.state.username,
            password: this.state.password,
        }).then((res) => {
            console.log(res);
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('isSuperAdmin', res.data.isSuperAdmin);
            this.setState({ redirectToHome: true });
        }).catch((error) => {
            console.log(error);
            if (error.response && error.response.status === 401) {
                alert('Invalid username/password combination');
            } else if (error.response && error.response.status === 409) {
                alert('Username does not exist!');
            }
        });
    }

    render() {
        // TODO: Update this once we know our home login page
        if (this.state.redirectToHome) {
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
                <div className="RedirectButton">
                    <Button href="/register" block size="lg" variant="secondary">Need to Register?</Button>
                </div>
            </div>
        );
    }
}