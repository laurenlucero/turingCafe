import React from "react";

const ReservationCard = ({
  id,
  name,
  date,
  time,
  number,
  cancelReservation,
}) => {
  return (
    <div className="reservation-card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Guests: {number}</p>
      <button onClick={() => cancelReservation(id)}>Cancel</button>
    </div>
  );
};

export default ReservationCard;
