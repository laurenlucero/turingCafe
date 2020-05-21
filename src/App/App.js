import React, { Component } from "react";
import "./App.css";
import { fetchReservations } from "../apiFetch.js";
import ReservationContainer from "./ReservationContainer";

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
        <ReservationContainer reservations={this.state.reservations} />
      </div>
    );
  }
}

export default App;

/* 
Components
-App
-ReservationContainer
-ReservationCard
-ReservationForm

-apiFetch

1. Display reservations on the DOM
2. Build controlled form component to create a reservation
3. Test -form component -App integration

...extensions
*/
