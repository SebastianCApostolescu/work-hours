export const login = user => {
	return {
		type: 'LOGIN',
		payload: {
			user: user
		}
	}
}
export const logout = () => {
	return {
		type: 'LOGOUT'
	}
}
