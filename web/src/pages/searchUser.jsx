import React from "react";
import { Button, Form } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import EventCard from "../component/eventCard";
import NavBar from "../component/navBar.jsx";

export default class SearchUsername extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: '',
            usernameSearch: '',
            searchedUserQueryType: 'registered',
            searchQueryResults: false,
            eventsFoundFromQuery: [],
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
            this.setState({ searchQueryResults: true });
            this.setState({ eventsFoundFromQuery: res.data.events });
            console.log(res);
        }).catch((error) => {
            console.log(error);
        });
    }




    render() {
        if (localStorage.getItem('loggedIn') === null || localStorage.getItem('loggedIn') === false) {
            return (
                <Redirect to='/login' />
            );
        }

        const eventResults = this.state.eventsFoundFromQuery;
        if (this.state.searchQueryResults) {
            const eventResultsList = eventResults.map(event => {
                return <li key={event.idEVENTS}><EventCard name={event.name} url={event.url} idEVENTS={event.idEVENTS} description={event.description} start_date={event.start_date} end_date={event.end_date} /></li>
            });
            return (
                <div><NavBar></NavBar><ul> {eventResultsList} </ul> </div>
            );
        }

        return (
            <div>
                <NavBar></NavBar>
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