/* eslint-disable */
import produce from "immer";

import * as actionTypes from './LayoutConstants';
import * as actions from './LayoutActions';
import { ActionType } from "typesafe-actions";

export type LayoutType = {
	showModal: boolean
	showMenu: boolean
}

const initialState : LayoutType = {
	showModal: false,
	showMenu: false,
};

type LayoutActions = ActionType<typeof actions>;

const LayoutReducer = (state = initialState, action : LayoutActions) =>
	produce(state, draft => {
		switch (action.type) {
			case actionTypes.TOGGLE_MODAL:
				draft.showModal = !draft.showModal;
			case actionTypes.TOGGLE_MENU:
				draft.showMenu = !draft.showMenu;
		}
	});

export default LayoutReducer;