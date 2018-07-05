import React, { PureComponent } from 'react';
// import { Dispatch, bindActionCreators } from 'redux';
import { createPortal } from 'react-dom';
// import { Mutation } from 'react-apollo';

import { connect } from 'react-redux';
import {
	getUserAndLayout,
	getUserAndLayoutType,
} from '../../lib/redux/reselect';
import { mapDispatchToProps } from "../../lib/redux/helpers";
import { ToggleModal } from '../../lib/redux/reducers/Layout/LayoutActions';

import SignForm from './components/SignForm';

// interface State {
// 	isLogin: boolean;
// 	username: string
// 	email: string
// 	password: string
// }

interface Actions {
	toggleModal: () => void;
}

// export type onChangeType = {
// 	key: 'username' | 'email' | 'password',
// 	e: React.FormEvent<HTMLInputElement>
// };

let modalRoot;
if (!process.env.SERVER) {
	modalRoot = document.getElementById('modal-root') as HTMLElement;
}

class AuthContainer extends PureComponent<getUserAndLayoutType & Actions, any> {
	state = {
		isLogin: false,
		username: '',
		email: '',
		password: '',
	};

	// TODO: I suppose I can't type state with dynamic keys like that, am I wrong?
	onChange = ({ target: { name, value, }}) : void => {
		this.setState({ [name]: value });
	};


	// switch between sign in and sign up
	switchScreen = () => this.setState(state => ({ isLogin: !state.isLogin }));

	render() {
		const {
			toggleModal,
			layout: { showModal },
		} = this.props;

		console.log(this.state, 'state in signform!');
		if (modalRoot) {
			return createPortal(
				<SignForm
					onChange={this.onChange}
					toggleModal={toggleModal}
					switchScreen={this.switchScreen}
					showModal={showModal}
					{...this.state}
				/>,
				modalRoot
			);
		}

		return null;
	}
}

const actionCreators = {
	toggleModal: ToggleModal,
};

export default connect(getUserAndLayout, mapDispatchToProps(actionCreators))(AuthContainer)
