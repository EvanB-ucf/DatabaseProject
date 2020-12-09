import React from "react";
import { Button, Form } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import EventCard from "../component/eventCard";
import NavBar from "../component/navBar.jsx";

export default class SearchDateCityEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventStartYear: '2020',
            eventStartMonth: '01',
            eventStartDate: '01',
            eventEndYear: '2020',
            eventEndMonth: '01',
            eventEndDate: '01',
            eventCity: '',
            loggedInUser: '',
            searchQueryResults: false,
            eventsFoundFromQuery: [],
        };
    }

    // validateForm = () => {
    //     return this.state.eventCity.length > 0;
    // }

    validateUsernameForm = () => {
        return this.state.usernameSearch.length > 0;
    }

    handleDateSubmit = (event) => {
        event.preventDefault();
        const startDate = this.state.eventStartYear + "-" + this.state.eventStartMonth + "-" + this.state.eventStartDate;
        const endDate = this.state.eventEndYear + "-" + this.state.eventEndMonth + "-" + this.state.eventEndDate;

        axios.post('http://localhost:3001/search', {
            eventStart: startDate,
            eventEnd: endDate,
            eventCity: null,
            loggedInUser: localStorage.getItem('username'),
        }).then((res) => {
            this.setState({ eventsFoundFromQuery: res.data.events });
            this.setState({ searchQueryResults: true });
        }).catch((error) => {
            console.log(error);
        });
    }

    handleCitySubmit = (event) => {
        event.preventDefault();
        
        var temp = new Date()
        const date = temp.getFullYear().toString() +'-' +(temp.getMonth()+1).toString() +'-'+ temp.getDate().toString()
        axios.post('http://localhost:3001/search', {
            currentDate: date,
            eventCity: this.state.eventCity,
            loggedInUser: localStorage.getItem('username'),
        
        }).then((res) => {
            this.setState({ eventsFoundFromQuery: res.data.events });
            this.setState({ searchQueryResults: true });
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
                <div>
                    <NavBar></NavBar>
                    <div> <ul style={{listStyleType: "none"}}> {eventResultsList} </ul> </div>
                </div>
            );
        }

        return (
            <div>
                <NavBar></NavBar>
                <div className="Login">
                    <h1 className="header">Search for Events by City and Dates</h1>
                    <Form onSubmit={this.handleDateSubmit}>
                        <Form.Group size="sm" controlId="eventStartMonth">
                            <Form.Label>Start Month</Form.Label>
                            <Form.Control as="select" onChange={(e) => this.setState({ eventStartMonth: e.target.value })}>
                                <option value="01">Jan </option>
                                <option value="02">Feb</option>
                                <option value="03">Mar</option>
                                <option value="04">Apr</option>
                                <option value="05">May</option>
                                <option value="06">Jun</option>
                                <option value="07">Jul</option>
                                <option value="08">Aug</option>
                                <option value="09">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group size="sm" controlId="eventStartDate">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control as="select" onChange={(e) => this.setState({ eventStartDate: e.target.value })}>
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="09">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group size="sm" controlId="eventStartYear">
                            <Form.Label>Start Year</Form.Label>
                            <Form.Control as="select" onChange={(e) => this.setState({ eventStartYear: e.target.value })}>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group size="sm" controlId="eventEndMonth">
                            <Form.Label>End Month</Form.Label>
                            <Form.Control as="select" onChange={(e) => this.setState({ eventEndMonth: e.target.value })}>
                                <option value="01">Jan </option>
                                <option value="02">Feb</option>
                                <option value="03">Mar</option>
                                <option value="04">Apr</option>
                                <option value="05">May</option>
                                <option value="06">Jun</option>
                                <option value="07">Jul</option>
                                <option value="08">Aug</option>
                                <option value="09">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group size="sm" controlId="eventEndDate">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control as="select" onChange={(e) => this.setState({ eventEndDate: e.target.value })}>
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="09">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group size="sm" controlId="eventEndYear">
                            <Form.Label>End Year</Form.Label>
                            <Form.Control as="select" onChange={(e) => this.setState({ eventEndYear: e.target.value })}>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </Form.Control>
                        </Form.Group>

                        <Button block size="lg" type="submit" >Search</Button>
                    
                    </Form>

                    <Form onSubmit={this.handleCitySubmit}>
                         { <Form.Group size="lg" controlId="eventCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="eventCity"
                                value={this.state.eventCity}
                                onChange={(e) => this.setState({ eventCity: e.target.value })} />
                        </Form.Group> }

                        <Button block size="lg" type="submit" >Search</Button> 

                    </Form>
                </div>
            </div>
        );
    }
}