import React from 'react';
import './ReserveForm.css';

const ReserveForm = () => {
  return (
    <form>
      <input 
        placeholder='Name'
        name='name'
        value='' />
      <input
        placeholder='Date (mm/dd)'
        name='date'
        value='' />
      <input
        placeholder='Time'
        name='time'
        value='' />
      <input
        placeholder='Number of guests'
        name='guests'
        value='' />
      <button className='reserve-btn'>Make Reservation</button>
    </form>
  )
}

export default ReserveForm;