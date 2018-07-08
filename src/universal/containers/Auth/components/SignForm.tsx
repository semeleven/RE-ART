import React, { PureComponent } from 'react';
import { FormikProps } from 'formik';
import { SignFormValues } from '../../Auth';

import {
	Row,
	Col,
	Heading,
	Input,
	Button,
	Link,
	Modal,
} from '../../../components';

interface Props extends FormikProps<SignFormValues> {
	isLogin: boolean;
	showModal: boolean;
	toggleModal: () => void;
	switchScreen: () => void; // switch between sign in and sign up screens
	loading: boolean;
}

const ColWithMargin = ({ children, ...rest }) => (
	<Col size={12} marginBottom="30px" {...rest}>
		{children}
	</Col>
);

export default class SignForm extends PureComponent<Props> {
	renderConditionalBottomPart = (isLogin, switchScreen) => {
		if (isLogin) {
			return (
				<ColWithMargin marginTop="15px">
					<Button width="100%" invertedDark onClick={switchScreen}>
						SIGN UP
					</Button>
				</ColWithMargin>
			);
		}

		return (
			<ColWithMargin marginTop="30px">
				<Heading size="S" lighterGray inline>
					Already have an account?{'  '}
				</Heading>
				<Link onClick={switchScreen} size="S">
					SIGN IN
				</Link>
			</ColWithMargin>
		);
	};

	renderError = (field: string) => {
		const { errors, touched } = this.props;

		if (errors[field] && touched[field]) {
			return (
				<Heading size="S" red>
					{errors[field]}
				</Heading>
			);
		}
	};

	renderInput = (field: string) => {
		const { values, handleChange, handleBlur } = this.props;

		const inputType = {
			email: 'email',
			password: 'password',
			username: 'text',
		};

		return (
			<ColWithMargin>
				<Input
					key={field}
					name={field}
					value={values[field]}
					onChange={handleChange}
					onBlur={handleBlur}
					label={field}
					type={inputType[field]}
					placeholder={field}
				/>
				{this.renderError(field)}
			</ColWithMargin>
		);
	};

	render() {
		const {
			switchScreen,
			toggleModal,
			showModal,
			isLogin,
			loading,
			handleSubmit,
		} = this.props;

		console.log(this.props, 'props!');
		return (
			<Modal toggleModal={toggleModal} showModal={showModal}>
				<Row justifyContent="center">
					<Col size={12} sizeL={12} sizeMd={12} sizeSm={12}>
						<form onSubmit={handleSubmit}>
							<Col size={12} centered marginBottom="50px">
								<Heading mono uppercase size="L">
									{`sign ${isLogin ? 'in' : 'up'} to re-art`}
								</Heading>
							</Col>
							{this.renderInput('email')}
							{!isLogin && this.renderInput('username')}
							{this.renderInput('password')}
							<Col size={12}>
								<Button
									type="submit"
									loading={loading}
									width="100%"
									dark={!loading}
									onClick={() => {}}
								>
									{isLogin ? 'SIGN IN' : 'SIGN UP'}
								</Button>
							</Col>
							{this.renderConditionalBottomPart(isLogin, switchScreen)}
						</form>
					</Col>
				</Row>
			</Modal>
		);
	}
}
