import React from 'react';
import Reservation from '../Reservation/Reservation';
import './Reservations.css'

const Reservations = ({reservations, cancelReservation }) => {
  const displayReservations = reservations.map(reservation => <Reservation 
    reservation={reservation}
    key={reservation.id}
    cancelReservation={cancelReservation} />)
  return (
    <section>
      {displayReservations}
    </section>
  )
}

export default Reservations;