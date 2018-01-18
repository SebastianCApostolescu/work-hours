export default function reducer(
  state = {
    hours: []
  },
  action
) {
  switch (action.type) {
    case 'ADD_HOUR': {
      return {
        ...state,
        hours: [state.hours, action.payload.hours]
      }
    }
    default: {
      return state
    }
  }
}
