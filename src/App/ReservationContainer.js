import React from "react";
import ReservationCard from "./ReservationCard";

const ReservationContainer = ({ reservations, cancelReservation }) => {
  const reservationCards = reservations.map((reservation) => {
    return (
      <ReservationCard
        {...reservation}
        cancelReservation={cancelReservation}
        key={reservation.id}
      />
    );
  });
  return <div className="reservations">{reservationCards}</div>;
};

export default ReservationContainer;
