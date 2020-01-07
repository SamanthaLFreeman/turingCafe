import React from 'react';
import Reservation from '../Reservation/Reservation';

const Reservations = ({reservations}) => {
  const displayReservations = reservations.map(reservation => <Reservation reservation={reservation} />)
  return (
    <section>
      {displayReservations}
    </section>
  )
}

export default Reservations;