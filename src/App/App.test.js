import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { getReservations, postReservation } from '../util/apicalls';

jest.mock('../util/apicalls');

getReservations.mockImplementation(() => {
  return Promise.resolve([{
    name: 'Sam',
    date: '1/14',
    time: '16:00',
    number: 2,
    id: 1
  }])
});

postReservation.mockImplementation(() => {
  return Promise.resolve({
    name: 'Sam',
    date: '1/14',
    time: '16:00',
    number: 2,
    id: 1
  })
});

describe('App', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<App />)
  })

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call postReservation when addReservation is given a new reservation', async () => {
    const reservationMock = {
      name: 'Sam',
      date: '1/14',
      time: '16:00',
      number: 2,
      id: 1
    }
    wrapper.instance().addReservation(reservationMock);
    expect(postReservation).toHaveBeenCalledWith(reservationMock);
  });
})
