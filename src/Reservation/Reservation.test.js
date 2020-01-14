import React from 'react';
import { shallow } from 'enzyme';
import Reservation from './Reservation';

describe('App', () => {
  let wrapper;
  const reservationMock = {
    name: 'Sam',
    date: '1/14',
    time: '16:00',
    number: 2
  }
  beforeEach(() => {
    wrapper = shallow(
    <Reservation 
      reservation={reservationMock} />)
  })

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})