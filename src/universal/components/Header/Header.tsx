import React, { Component } from 'react';
import styled from '../../lib/styled';

import { Button, Icon, Heading } from '../../components';

const StyledHeader = styled.header`
	display: flex;
	color: ${props => props.theme.white};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${props => props.theme.darkGray};
	padding-left: 24px;
	padding-right: 24px;
	height: 82px;
	margin-bottom: 50px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 50%;
	justify-content: flex-end;
`;

class Header extends Component<any, any> {
	render() {
		return (
			<StyledHeader>
				<Icon icon="hamburger" />
				<Wrapper>
					<Heading>
						RE:ART
					</Heading>
				</Wrapper>
				<Wrapper>
					<Button invertedPurple onClick={() => console.log('LOGIN')} spaced>
						LOGIN
					</Button>
					<Button purple onClick={() => console.log('SIGN UP')} spaced>
						SIGN UP
					</Button>
					<Icon icon="search" />
				</Wrapper>
			</StyledHeader>
		);
	}
}

export default Header;
