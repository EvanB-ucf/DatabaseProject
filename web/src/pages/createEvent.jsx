import React from "react";
import { Button, Form } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import NavBar from "../component/navBar.jsx";

export default class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            eventTitle: '',
            eventDescription: '',
            eventCategory: '',
            eventURL: '',
            eventStartYear: '2020',
            eventStartMonth: '01',
            eventStartDate: '01',
            eventEndYear: '2020',
            eventEndMonth: '01',
            eventEndDate: '01',
            eventStreet: '',
            eventCity: '',
            eventState: 'AL',
            eventCreated: false,
            eventID: '',
        };
    }

    validateForm = () => {
        const validLength = this.state.eventTitle.length > 0 && this.state.eventDescription.length > 0 && this.state.eventDescription.length > 0 && this.state.eventStreet.length > 0 && this.state.eventCity.length > 0;
        // Todo: handle date validation
        return validLength;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const curUser = localStorage.getItem('username');
        const startDate = this.state.eventStartYear + "-" + this.state.eventStartMonth + "-" + this.state.eventStartDate;
        const endDate = this.state.eventEndYear + "-" + this.state.eventEndMonth + "-" + this.state.eventEndDate;
        // var titleMinusWhiteSpace = this.state.eventTitle.split(' ').join('_').substring(0, 5);
        // const url = "?name=" + titleMinusWhiteSpace + "&city=" + this.state.eventCity + "&starts=" + startDate;
        // console.log(url);

        console.log("start:" + startDate);
        console.log("end:" + endDate);

        // TODO: Verify correct port & this will need to be uploaded
        axios.post('http://localhost:3001/create', {
            eventTitle: this.state.eventTitle,
            eventDescription: this.state.eventDescription,
            eventURL: this.state.eventURL,
            eventStart: startDate,
            eventEnd: endDate,
            eventCategory: this.state.eventCategory,
            eventStreet: this.state.eventStreet,
            eventCity: this.state.eventCity,
            eventState: this.state.eventState,
            username: curUser,
        }).then((res) => {
            this.state.eventCreated = true;
            console.log(res);
            alert("Event created!");
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        // TODO: Update this once we know our home login page
        if (this.state.eventCreated) {
            return (
                <Redirect to='/' />
            );
        }
        if (localStorage.getItem('loggedIn') === null || localStorage.getItem('loggedIn') === false) {
            return (
                <Redirect to='/login' />
            );
        }
        return (
            <div>
                <NavBar></NavBar>
                <div className="Login">
                    <h1 className="header">Create an Event</h1>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group size="lg" controlId="eventTitle">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                autoFocus
                                value={this.state.eventTitle}
                                onChange={(e) => this.setState({ eventTitle: e.target.value })} />
                        </Form.Group>

                        <Form.Group size="lg" controlId="eventDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                type="eventDescription"
                                value={this.state.eventDescription}
                                onChange={(e) => this.setState({ eventDescription: e.target.value })} />
                        </Form.Group>

                        <Form.Group size="lg" controlId="eventCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                autoFocus
                                value={this.state.eventCategory}
                                onChange={(e) => this.setState({ eventCategory: e.target.value })} />
                        </Form.Group>

                        <Form.Group size="lg" controlId="eventURL">
                            <Form.Label>URL</Form.Label>
                            <Form.Control
                                autoFocus
                                value={this.state.eventURL}
                                onChange={(e) => this.setState({ eventURL: e.target.value })} />
                        </Form.Group>

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


                        <Form.Group size="lg" controlId="eventStreet">
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control
                                type="eventStreet"
                                value={this.state.eventStreet}
                                onChange={(e) => this.setState({ eventStreet: e.target.value })} />
                        </Form.Group>

                        <Form.Group size="lg" controlId="eventCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="eventCity"
                                value={this.state.eventCity}
                                onChange={(e) => this.setState({ eventCity: e.target.value })} />
                        </Form.Group>

                        <Form.Group size="lg" controlId="eventState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" onChange={(e) => this.setState({ eventState: e.target.value })}>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </Form.Control>
                        </Form.Group>
                        <Button block size="lg" type="submit" disabled={!this.validateForm()}>Create Event</Button>
                    </Form>
                </div>
            </div>
        );
    }
}