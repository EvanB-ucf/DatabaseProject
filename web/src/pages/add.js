import React from "react";
const server = "http://localhost:5000";

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {helloResponseFromServer: ""};
    }

    askNodeServerForHello() {
        fetch(server + "/", {
            method: 'get'
        })
        .then(res => res.text())
        .then(res => this.setState({helloResponseFromServer: res}))
        .catch(err => err);
    }

    componentDidMount() {
        this.askNodeServerForHello();
    }

    render() {
        // PUT HTML WITHIN RETURN
        return (
            <div>
                <p>{this.state.helloResponseFromServer}</p>
            </div>
        )
    }

}