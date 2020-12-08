import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

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
        const isSuperAdmin = localStorage.getItem('isSuperAdmin');
        let button;
        if (isSuperAdmin === 'true') {
            button = <div />;
        } else {
            button = <Button block size="sm" type="button" variant="warning" style={{ display: 'inlineBlock' }} onClick={this.handleUserRegisters}>Register</Button>
        }
        return button;
    }

    handleUserRegisters = (idEvent) => {
        const loggedInUser = localStorage.getItem('username');

        axios.post('http://localhost:3001/addevent', {
            username: loggedInUser,
            eventEnd: this.state.idEVENTS,
        }).then((res) => {
            if (res.status && res.status === 201) {
                alert("Congrats you are registered for the event!");
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        const startDateParsed = this.state.start_date.substring(0, 10);
        const endDateParsed = this.state.end_date.substring(0, 10);

        return (
            <div>
                <div class="container mt-5 d-flex justify-content-center">
                    <div class="card p-3">
                        <div class="d-flex align-items-center">
                            <div class="ml-3 w-100">
                                <h4 class="mb-0 mt-0">{this.state.name}</h4><span>{this.state.url}</span>
                                <div class="d-flex flex-column"><span>Starts: {startDateParsed}</span> </div>
                                <div class="d-flex flex-column"><span>Ends: {endDateParsed}</span> </div>
                                <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                    <div class="d-flex flex-column"> <span class="followers">Description:</span>{this.state.description}</div>
                                </div>
                                <div>{this.canRegister()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}