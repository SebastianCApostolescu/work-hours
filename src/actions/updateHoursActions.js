export const addHourAction = (key, log) => {
	return {
		type: 'ADD_HOUR',
		payload: {
			key: key,
			log: log
		}
	}
}
export const stuffAdd = stuff => {
	return {
		type: 'ADD_STUFF',
		payload: {
			stuff: stuff
		}
	}
}
