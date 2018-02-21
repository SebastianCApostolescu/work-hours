// export default function reducer(
// 	state = {
// 		log: [
// 			{
// 				'20180104': {
// 					day: 'jueves',
// 					hora: '20:00',
// 					id: 4
// 				}
// 			}
// 		]
// 	},
// 	action
// ) {
// 	switch (action.type) {
// 		case 'ADD_HOUR': {
// 			return {
// 				...state,
// 				log: [...state.log, { [action.payload.key]: action.payload.log }]
// 			}
// 		}
// 		default: {
// 			return state
// 		}
// 	}
// }

export default function reducer(
	state = {
		log: [],
		stuff: ''
	},
	action
) {
	switch (action.type) {
		case 'ADD_HOUR': {
			return {
				...state,
				log: [...state.log, action.payload.log]
			}
		}
		case 'ADD_STUFF': {
			return { ...state, stuff: action.payload.stuff }
		}
		default: {
			return state
		}
	}
}
