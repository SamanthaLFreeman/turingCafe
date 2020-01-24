import React from 'react';
import { shallow } from 'enzyme';
import Reservation from './Reservation';

describe('Reservation', () => {
  let wrapper;
  const reservationMock = {
    name: 'Sam',
    date: '1/14',
    time: '16:00',
    number: 2
  }
  const cancelReservationMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
    <Reservation 
      reservation={reservationMock}
        cancelReservation={cancelReservationMock} />)
  })

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call cancelReservation with the current id passed through on click of the button', () => {
    wrapper.find('.cancel-btn').simulate('click');
    expect(cancelReservationMock).toBeCalledWith(reservationMock.id)
  })
})