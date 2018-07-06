/* eslint-disable */
// TODO: well, immer doesn't work with redux-persist
// https://github.com/rt2zz/redux-persist/issues/747
// should I remove it then?
// import produce from 'immer';

import { ActionType } from 'typesafe-actions';
import * as actionTypes from './UserConstants';
import * as actions from './UserActions';

export type UserData = {
	token: string;
	username?: string;
	email?: string;
	ID?: number;
};

type State = {
	user: UserData;
};

const initialState: State = {
	user: {
		token: null,
		username: '',
		email: '',
		ID: null,
	},
};

type UserActions = ActionType<typeof actions>;

const userReducer = (state = initialState, action: UserActions) => {
	console.log(action.type, 'action Type');
	switch (action.type) {
		case actionTypes.AUTHORIZATION:
			return {
				...state,
				user: {
					...state.user,
					...action.payload,
				}
			};
		default:
			return state;
	}
};

export default userReducer;
