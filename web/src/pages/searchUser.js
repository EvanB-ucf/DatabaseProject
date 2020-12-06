import React from "react";
import { Button, Form } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class SearchUsername extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: '',
            usernameSearch: '',
            searchedUserQueryType: 'registered',
            searchQueryResults: false,
        };
    }

    validateUsernameForm = () => {
        return this.state.usernameSearch.length > 0;
    }

    handleUsernameSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/searchuser', {
            loggedInUser: localStorage.getItem('username'),
            usernameSearch: this.state.usernameSearch,
            searchedUserQueryType: this.state.searchedUserQueryType,
        }).then((res) => {
            this.state.searchQueryResults = true;
            console.log(res);
            alert("Found events from users!");
        }).catch((error) => {
            console.log(error);
        });
    }



    render() {
        if (this.state.searchQueryResults) {
            return (
                <Redirect to='/' />
            );
        }
        return (
            <div>
                <div className="Login">
                    <h1 className="header">Search for Events by Username</h1>
                    <Form onSubmit={this.handleUsernameSubmit}>
                        <Form.Group size="lg" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="usernameSearch"
                                value={this.state.usernameSearch}
                                onChange={(e) => this.setState({ usernameSearch: e.target.value })} />
                        </Form.Group>

                        <Form.Group size="sm" controlId="typeofSearch">
                            <Form.Label>Type of Search</Form.Label>
                            <Form.Control as="select" onChange={(e) => this.setState({ searchedUserQueryType: e.target.value })}>
                                <option value="registered">Attended </option>
                                <option value="organized">Organized</option>
                            </Form.Control>
                        </Form.Group>

                        <Button block size="lg" type="submit" disabled={!this.validateUsernameForm()}>Search</Button>
                    </Form>
                </div>
            </div>
        );
    }
}