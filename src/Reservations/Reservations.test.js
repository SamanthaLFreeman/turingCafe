import React from 'react';
import { shallow } from 'enzyme';
import Reservations from './Reservations';

describe('Reservations', () => {
  let wrapper;
  const reservationsMock = [{
    name: 'Sam',
    date: '1/14',
    time: '16:00',
    number: 2,
    id: 1
  }]

  beforeEach(() => {
    wrapper = shallow(
      <Reservations
        reservations={reservationsMock} />)
  })

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})