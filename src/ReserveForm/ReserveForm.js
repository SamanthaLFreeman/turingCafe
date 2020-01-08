import React, { Component } from 'react';
import './ReserveForm.css';

class ReserveForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    let newReservation = {
      ...this.state,
      id: Date.now()
    }
    e.preventDefault();
    this.props.addReservation(newReservation);
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
  return (
    <form>
      <input 
        placeholder='Name'
        type='text'
        name='name'
        value={this.state.name} 
        onChange={this.handleChange} />
      <input
        placeholder='Date (mm/dd)'
        type='text'
        name='date'
        value={this.state.date}
        onChange={this.handleChange} />
      <input
        placeholder='Time'
        type='text'
        name='time'
        value={this.state.time}
        onChange={this.handleChange} />
      <input
        placeholder='Number of guests'
        type='number'
        name='number'
        value={this.state.number}
        onChange={this.handleChange} />
      <button 
        className='reserve-btn'
        onClick={this.handleSubmit}>Make Reservation</button>
    </form>
  )
  }
}

export default ReserveForm;