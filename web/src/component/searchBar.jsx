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
          <div className="searchoption">
            <input className="searchfilterradio" name="filterby" type="radio" value="state" /> 
            <p className="searchfilter">By State</p>
          </div>
          <div className="searchoption">
            <input name="filterby" type="radio" value="city" /> 
            <p className="searchfilter">By City</p>
          </div>
          <textarea className="searchcontent" placeholder = "Search" value={this.state.value} rows="1" onChange={this.handleChange} />
          <button className="searchsubmit" type="submit">&#8981;</button>
        </form>
    );
  }
}