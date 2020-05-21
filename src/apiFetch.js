export const fetchReservations = async () => {
  let response = await fetch("http://localhost:3001/api/v1/reservations");
  let data = await response.json();
  console.log(data);
  return data;
};