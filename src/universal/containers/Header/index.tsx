import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';

import { connect } from '../../lib/redux/connect';
import { getUserAndLayout, getUserAndLayoutType } from '../../lib/redux/reselect';

import { ToggleModal, ToggleMenu } from '../../lib/redux/reducers/Layout/LayoutActions';

import Header from './components/Header';

interface Props {
	dispatch?: Dispatch
}

@connect(getUserAndLayout)
export default class HeaderContainer extends PureComponent<getUserAndLayoutType & Props> {
	render() {
		const { dispatch, layout: { showMenu } } = this.props;
		
		return (
			<Header
				showMenu={showMenu}
				toggleModal={() => dispatch(ToggleModal())}
				toggleMenu={() => dispatch(ToggleMenu())}
			/>
		);
	}
}