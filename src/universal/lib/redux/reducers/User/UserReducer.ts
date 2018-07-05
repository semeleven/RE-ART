/* eslint-disable */
// eslint doesn't like immer
import produce from 'immer';

import { ActionType } from 'typesafe-actions';
import * as actionTypes from './UserConstants';
import * as actions from './UserActions';

export type UserData = {
	token: string
	username: string
	email: string
	ID: number
}

type State = {
	user: UserData
}

const initialState: State = {
	user: {
		token: null,
		username: null,
		email: null,
		ID: null,
	},
};

type UserActions = ActionType<typeof actions>;

const userReducer = (state = initialState, action : UserActions) =>
	produce(state, draft => {
		switch (action.type) {
			case actionTypes.AUTHORIZATION:
				draft.user = action.payload;
		}
	});

export default userReducer;
