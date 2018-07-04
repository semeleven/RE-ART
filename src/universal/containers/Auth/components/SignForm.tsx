import React from 'react';
import { Row, Col, Heading, Input, Button, Link } from '../../../components';

interface Props {
	login: boolean;
}

const InputWrapper = ({ children }) => (
	<Col size={12} marginBottom="30px">
		{children}
	</Col>
);

const SignForm: React.SFC<Props> = ({ login }) => (
	<Row justifyContent="center">
		<Col size={6}>
			<Col size={12} centered marginBottom="50px">
				<Heading mono uppercase size="L">
					{login ? 'sign in to re-art' : 'join the art community'}
				</Heading>
			</Col>
			<InputWrapper>
				<Input label="Email" type="email" placeholder="Email" />
			</InputWrapper>
			{login && (
				<InputWrapper>
					<Input label="Username" type="text" placeholder="Username" />
				</InputWrapper>
			)}
			<InputWrapper>
				<Input label="Password" type="password" placeholder="Password" />
			</InputWrapper>
			<Col size={12}>
				<Button width="100%" dark onClick={() => console.log('click!')}>
					{login ? 'SIGN IN' : 'SIGN UP'}
				</Button>
			</Col>
			{login && (
				<Col size={12}>
					<Button
						width="100%"
						invertedDark
						onClick={() => console.log('click!')}
					>
							SIGN UP
					</Button>
				</Col>
			)}
			{!login && (
				<Col size={12}>
					<Heading size="S" lighterGray inline>
							Already have an account?{' '}
					</Heading>
					<Link to="/sign/in" size="S">
							SIGN IN
					</Link>
				</Col>
			)}
		</Col>
	</Row>
);

export default SignForm;
