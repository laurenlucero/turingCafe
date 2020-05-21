import React, { Component } from "react";
import "./App.css";
import { fetchReservations } from "../apiFetch.js";
import ReservationContainer from "./ReservationContainer";
import ReservationForm from "./ReservationForm";

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

  saveReservation = (newReservation) => {
    this.setState({
      reservations: [...this.state.reservations, newReservation],
    });
  };

  cancelReservation = (id) => {
    const reservations = this.state.reservations.filter(
      (reservation) => reservation.id !== id
    );
    this.setState({ reservations });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <ReservationForm
          reservations={this.state.reservations}
          saveReservation={this.saveReservation}
        />
        <ReservationContainer
          reservations={this.state.reservations}
          cancelReservation={this.cancelReservation}
        />
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
