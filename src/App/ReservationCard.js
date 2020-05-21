import React from "react";

const ReservationCard = ({ name, date, time, number, id }) => {
  return (
    <div className="reservation-card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Guests: {number}</p>
      <button>Cancel</button>
    </div>
  );
};

export default ReservationCard;
