import React from "react";
import ReservationCard from "./ReservationCard";

const ReservationContainer = ({ reservations }) => {
  const reservationCards = reservations.map((reservation) => {
    return <ReservationCard {...reservation} />;
  });
  return <div className="reservations">{reservationCards}</div>;
};

export default ReservationContainer;
