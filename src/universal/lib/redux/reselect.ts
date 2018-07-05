import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import { UserData } from '../../lib/redux/reducers/User/UserReducer';
import { LayoutType } from '../../lib/redux/reducers/Layout/LayoutReducer';

export const getUserData = state => state.user;
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
