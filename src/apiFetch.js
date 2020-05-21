export const fetchReservations = async () => {
  let response = await fetch("http://localhost:3001/api/v1/reservations");
  let data = await response.json();
  return data;
};

export const postReservation = (name, date, time, number) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       name,
       date,
       time,
       number
     })
   })
}