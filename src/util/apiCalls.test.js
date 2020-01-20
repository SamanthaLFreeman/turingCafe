import { getReservations, postReservation } from './apicalls';

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

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(getReservations()).rejects.toEqual(Error('Could not retrieve reservations.'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(getReservations()).rejects.toEqual(Error('fetch failed'))
  });
});

describe('postReservation', () => {
  let mockReservation = {
    name: 'Sam',
    date: '1/14',
    time: '16:00',
    number: 2,
    id: 1
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockReservation)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mockReservation)
    };

    postReservation(mockReservation);

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations', options)
  });
});