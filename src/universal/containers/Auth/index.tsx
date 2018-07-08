import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';

import { Mutation } from 'react-apollo';
import { SignMutation, SignUpVariables } from './AuthSchema';

import { connect } from 'react-redux';
import {
	getUserAndLayout,
	getUserAndLayoutType,
} from '../../lib/redux/reselect';
import { mapDispatchToProps } from '../../lib/redux/helpers';
import { ToggleModal } from '../../lib/redux/reducers/Layout/LayoutActions';

import { UserData } from '../../lib/redux/reducers/User/UserReducer';
import { Authorize } from '../../lib/redux/reducers/User/UserActions';

import SignForm from './components/SignForm';
// interface State {
// 	isLogin: boolean;
// }

interface Actions {
	toggleModal: () => void;
	authorize: (data: UserData) => void; // log in user
}

interface SignUpResponseInterface {
	success: boolean;
	message?: string; // validation errors, etc
	data: {
		sign: {
			token: string;
		};
		user: {
			username: string;
			ID: number;
			email: string;
		};
	};
}

// export type onChangeType = {
// 	key: 'username' | 'email' | 'password',
// 	e: React.FormEvent<HTMLInputElement>
// };

let modalRoot;
if (!process.env.SERVER) {
	modalRoot = document.getElementById('modal-root') as HTMLElement;
}

// type State = <Partial

class AuthContainer extends PureComponent<getUserAndLayoutType & Actions, any> {
	state = {
		isLogin: true,
		username: '',
		email: '',
		password: '',
	};

	// TODO: I suppose I can't type state with dynamic keys like that, am I wrong?
	onChange = ({ target: { name, value } }): void =>
		this.setState({ [name]: value });

	// switch between sign in and sign up screens
	switchScreen = (): void =>
		this.setState(state => ({ isLogin: !state.isLogin }));

	handleSignUpResponse = (response: SignUpResponseInterface) => {
		const { authorize, user } = this.props;
		console.log(user, user.token, 'user prop!');
		console.log(response, 'response!!!');
		// prevent infinite loop
		if (user.token == null) {
			if (response.success === true) {
				if (response.data.sign.token && response.data.user) {
					const payload = {
						...response.data.sign,
						...response.data.user,
					};

					return authorize(payload);
				}
			} else if (response.success === false) {
				console.log(response.message, 'message!');
				this.setState({ errorMsg: response.message });
			}
		}
	};

	render() {
		const {
			toggleModal,
			layout: { showModal },
		} = this.props;

		const { isLogin, username, email, password } = this.state;

		const variables: SignUpVariables = {
			...(isLogin === false && { username }),
			email,
			password,
		};

		console.log(variables, 'variables!');

		console.log(this.state, 'state in signform!');
		if (modalRoot) {
			return createPortal(
				<Mutation mutation={SignMutation} variables={variables}>
					{(SignUpRequest, { data = {}, error, loading }) => {
						if (error) return <h1>Error!</h1>;
						// if (loading) return <h1>Loading...</h1>;

						const { Sign = null } = data;

						if (Sign) {
							this.handleSignUpResponse(Sign);
						}

						return (
							<SignForm
								onChange={this.onChange}
								toggleModal={toggleModal}
								switchScreen={this.switchScreen}
								showModal={showModal}
								SignUpRequest={SignUpRequest}
								loading={loading}
								{...this.state}
							/>
						);
					}}
				</Mutation>,
				modalRoot
			);
		}

		return null;
	}
}

const actionCreators = {
	toggleModal: ToggleModal,
	authorize: Authorize,
};

export default connect(
	getUserAndLayout,
	mapDispatchToProps(actionCreators)
)(AuthContainer);
