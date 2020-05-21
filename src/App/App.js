import React, { Component } from "react";
import "./App.css";
import { fetchReservations } from "../apiFetch.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    };
  }

  componentDidMount = () => {
    fetchReservations()
      .then((reservations) => this.setState({ reservations }))
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form"></div>
        <div className="resy-container"></div>
      </div>
    );
  }
}

export default App;
