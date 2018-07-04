const initialState = {
	user: {},
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
	case 'AUTHORIZATION':
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

export const Test = ({ token }) => ({
	type: 'AUTHORIZATION',
	payload: { token },
});
