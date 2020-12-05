import React from "react";
import "../styles/main.css";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Search for: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <form className="search" onSubmit={this.handleSubmit}>
          <label>
            <textarea className="searchcontent" placeholder = "Search" value={this.state.value} rows="1" onChange={this.handleChange} />
          </label>
          <button className="searchsubmit" type="submit">Search</button>
        </form>
    );
  }
}