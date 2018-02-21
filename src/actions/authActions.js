export const loginAction = user => {
	return {
		type: 'LOGIN',
		payload: {
			user: user
		}
	}
}
export const setUserAction = user => {
	return {
		type: 'SET_USER',
		payload: {
			user: user
		}
	}
}
export const logoutAction = () => {
	return {
		type: 'LOGOUT'
	}
}
