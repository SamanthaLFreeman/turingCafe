import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations'
import ReserveForm from '../ReserveForm/ReserveForm';
import { getReservations, postReservation, deleteReservation } from '../util/apicalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(data => this.setState({reservations: data}))
      .catch(error => console.log(error))
  }

  addReservation = (newReservation) => {
    postReservation(newReservation)
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    this.setState({ reservations: [...this.state.reservations, newReservation]})
  }

  cancelReservation = (id) => {
    deleteReservation(id)
      .then(data => this.setState({ reservations: data }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReserveForm addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}
          cancelReservation={this.cancelReservation} />
        </div>
      </div>
    )
  }
}

export default App;
