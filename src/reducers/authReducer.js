export default function reducer(
  state = {
    user: null,
    authed: false,
    loading: true
  },
  action
) {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        user: action.payload.user,
        authed: true,
        loading: false
      }
    }
    case 'LOGOUT': {
      return { ...state, user: null, authed: false, loading: false }
    }
    case 'SET_USER': {
      return {
        ...state,
        user: action.payload.user,
        authed: true,
        loading: false
      }
    }
    default: {
      return state
    }
  }
}
