import React, { PureComponent } from 'react';
// import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
	getUserAndLayout,
	getUserAndLayoutType,
} from '../../lib/redux/reselect';

import { mapDispatchToProps } from '../../lib/redux/helpers';

import {
	ToggleModal,
	ToggleMenu,
} from '../../lib/redux/reducers/Layout/LayoutActions';

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
		} = this.props;

		return (
			<Header
				showMenu={showMenu}
				toggleModal={toggleModal}
				toggleMenu={toggleMenu}
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
