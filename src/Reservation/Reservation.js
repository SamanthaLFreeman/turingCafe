import React from 'react';
import './Reservation.css';

const Reservation = ({reservation}) => {
  return (
    <article>
      <h2>{reservation.name}</h2>
      <p>{reservation.date}</p>
      <p>{reservation.time}</p>
      <p>Number of guests: {reservation.number}</p>
      <button>Cancel</button>
    </article>
  )
}

export default Reservation;