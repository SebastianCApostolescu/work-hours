export const addHourAction = hour => {
  return {
    type: 'ADD_HOUR',
    payload: {
      hour: hour
    }
  }
}
