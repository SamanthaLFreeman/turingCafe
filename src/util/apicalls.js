export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not retrieve reservations.')
      }
      return response.json()
    })
}

export const postReservation = (newReservation) => {
  let optionsObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReservation),
  }
  return fetch('http://localhost:3001/api/v1/reservations', optionsObj)
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not post a new reservation.')
      }
      return response.json()
    })
}

export const deleteReservation = (id) => {
  const optionsObj = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, optionsObj)
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not delete a reservation.')
      }
      return response.json()
    })
}