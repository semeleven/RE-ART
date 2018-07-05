import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
// import { connect } from 'react-redux';
// import { Mutation } from 'react-apollo';

import SignForm from './components/SignForm';
import {
	getUserAndLayout,
	getUserAndLayoutType,
} from '../../lib/redux/reselect';
import { connect } from '../../lib/redux/connect';

interface State {
	isLogin: boolean;
}

let modalRoot;
if (!process.env.SERVER) {
	modalRoot = document.getElementById('modal-root') as HTMLElement;
}

@connect(getUserAndLayout)
export default class Auth extends PureComponent<getUserAndLayoutType, State> {
	state = {
		isLogin: false,
	};

	render() {
		const { isLogin } = this.state;
		const {
			layout: { showModal },
		} = this.props;

		if (modalRoot) {
			return createPortal(
				<SignForm
					closeModal={() => {}}
					showModal={showModal}
					login={isLogin}
				/>,
				modalRoot
			);
		}

		return null;
	}
}
