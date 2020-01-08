import React from 'react';
import Reservation from '../Reservation/Reservation';
import './Reservations.css'

const Reservations = ({reservations}) => {
  const displayReservations = reservations.map(reservation => <Reservation reservation={reservation}
    key={reservation.id} />)
  return (
    <section>
      {displayReservations}
    </section>
  )
}

export default Reservations;