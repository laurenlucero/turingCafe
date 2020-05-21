import React from "react";

const ReservationCard = ({ name, date, time, number, id }) => {
  return (
    <div className="reservation-card">
      <h2>{name}</h2>
      <ul>
        <li>{date}</li>
        <li>{time}</li>
        <li>Guests: {number}</li>
      </ul>
      <button>Cancel</button>
    </div>
  );
};

export default ReservationCard;
