import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      time: "",
      guests: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state,
    };
    this.props.saveReservation(newReservation);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: "", date: "", time: "", guests: "" });
  };

  render() {
    return (
      <form className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date (mm/dd)"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="guests"
          placeholder="Number of guests"
          value={this.state.guests}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Make Reservation</button>
      </form>
    );
  }
}

export default Form;
