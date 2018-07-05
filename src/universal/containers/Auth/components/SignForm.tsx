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

interface Props {
	login: boolean;
	showModal: boolean;
	closeModal: () => void;
}

const ColWithMargin = ({ children }) => (
	<Col size={12} marginBottom="30px">
		{children}
	</Col>
);

const SignForm: React.SFC<Props> = ({ closeModal, showModal, login }) => (
	<Modal closeModal={closeModal} showModal={showModal}>
		<Row justifyContent="center">
			<Col size={12} sizeL={12} sizeMd={12} sizeSm={12}>
				<Col size={12} centered marginBottom="50px">
					<Heading mono uppercase size="L">
						{login ? 'sign in to re-art' : 'join the art community'}
					</Heading>
				</Col>
				<ColWithMargin>
					<Input label="Email" type="email" placeholder="Email" />
				</ColWithMargin>
				{login && (
					<ColWithMargin>
						<Input label="Username" type="text" placeholder="Username" />
					</ColWithMargin>
				)}
				<ColWithMargin>
					<Input label="Password" type="password" placeholder="Password" />
				</ColWithMargin>
				<Col size={12}>
					<Button width="100%" dark onClick={() => console.log('click!')}>
						{login ? 'SIGN IN' : 'SIGN UP'}
					</Button>
				</Col>
				{login && (
					<ColWithMargin>
						<Button
							width="100%"
							invertedDark
							onClick={() => console.log('click!')}
						>
							SIGN UP
						</Button>
					</ColWithMargin>
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
	</Modal>
);

export default SignForm;
