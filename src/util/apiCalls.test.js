import { getReservations } from './apicalls';

describe('getReservations', () => {
  let mockReservations;

  beforeEach(() => {
    mockReservations = [{
      name: 'Sam',
      date: '1/14',
      time: '16:00',
      number: 2,
      id: 1
    }]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockReservations)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    getReservations();

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations')
  });

  it('should return the array of reservations', () => {
    expect(getReservations()).resolves.toEqual(mockReservations);
  });

});