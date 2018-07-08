import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import { UserData } from './reducers/User/UserReducer';
import { LayoutType } from './reducers/Layout/LayoutReducer';

export const getUserData = state => state.userReducer.user;
export const getLayout = state => state.layout;

export const getUserAndLayout = createStructuredSelector({
	user: getUserData,
	layout: getLayout,
});

export type getUserAndLayoutType = {
	user: UserData;
	layout: LayoutType;
	dispatch?: Dispatch;
};
