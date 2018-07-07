import React from 'react';
import {
	Row,
	Col,
	Heading,
	Input,
	Button,
	Link,
	Modal,
} from '../../../components';
// import { onChangeType } from '../../Auth';
interface Props {
	isLogin: boolean;
	showModal: boolean;
	onChange: (any) => void;
	toggleModal: () => void;
	switchScreen: () => void; // switch between sign in and sign up screens
	// form values
	username: string;
	email: string;
	password: string;
	SignUpRequest: () => void;
}

const ColWithMargin = ({ children, ...rest }) => (
	<Col size={12} marginBottom="30px" {...rest}>
		{children}
	</Col>
);

const renderConditionalBottomPart = (isLogin, switchScreen) => {
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

const SignForm: React.SFC<Props> = ({
    onChange,
    switchScreen,
    toggleModal,
    showModal,
    isLogin,
    username,
    email,
    password,
    SignUpRequest,
}) => (
	<Modal toggleModal={toggleModal} showModal={showModal}>
		<Row justifyContent="center">
			<Col size={12} sizeL={12} sizeMd={12} sizeSm={12}>
				<Col size={12} centered marginBottom="50px">
					<Heading mono uppercase size="L">
						{`sign ${isLogin ? 'in' : 'up'} to re-art`}
					</Heading>
				</Col>
				<ColWithMargin>
					<Input
						key="email"
						name="email"
						value={email}
						onChange={onChange}
						label="Email"
						type="email"
						placeholder="Email"
					/>
				</ColWithMargin>
				{!isLogin && (
					<ColWithMargin>
						<Input
							key="username"
							name="username"
							value={username}
							onChange={onChange}
							label="Username"
							type="text"
							placeholder="Username"
						/>
					</ColWithMargin>
				)}
				<ColWithMargin>
					<Input
						key="password"
						name="password"
						value={password}
						onChange={onChange}
						label="Password"
						type="password"
						placeholder="Password"
					/>
				</ColWithMargin>
				<Col size={12}>
					<Button width="100%" dark onClick={SignUpRequest}>
						{isLogin ? 'SIGN IN' : 'SIGN UP'}
					</Button>
				</Col>
				{renderConditionalBottomPart(isLogin, switchScreen)}
			</Col>
		</Row>
	</Modal>
);

export default SignForm;