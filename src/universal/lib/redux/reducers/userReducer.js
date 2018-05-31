const initialState = {
	user: {},
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case 'TEST':
			return {
				...state,
				user: {
					...state.user,
					...action.payload,
				},
			};

		default:
			return state;
	}
}

export const Test = data => ({
	type: 'TEST',
	payload: { token: 'token' },
});
