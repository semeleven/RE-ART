import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
	getUserAndLayout,
	getUserAndLayoutType,
} from '@Redux/reselect';

import { mapDispatchToProps } from '@Redux/helpers';

import {
	ToggleModal,
	ToggleMenu,
} from '@Redux/reducers/Layout/LayoutActions';

import Header from './components/Header';

interface Actions {
	toggleModal: () => void;
	toggleMenu: () => void;
}

class HeaderContainer extends PureComponent<getUserAndLayoutType & Actions> {
	render() {
		const {
			toggleModal,
			toggleMenu,
			layout: { showMenu },
			user: { token },
		} = this.props;

		return (
			<Header
				showMenu={showMenu}
				toggleModal={toggleModal}
				toggleMenu={toggleMenu}
				token={token}
			/>
		);
	}
}

const actionCreators = {
	toggleModal: ToggleModal,
	toggleMenu: ToggleMenu,
};

export default connect(
	getUserAndLayout,
	mapDispatchToProps(actionCreators)
)(HeaderContainer);
