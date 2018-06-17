import React, { Component } from 'react';
import styled from '../../lib/styled';

import { Button, Icon, SideMenu } from '../../components';

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
	align-items: center;
`;

class Header extends Component<any, any> {
	state = {
		showMenu: false,
	};

	handleMenu = () => (
		this.setState(state => ({ showMenu: !state.showMenu }))
	);

	render() {
		return (
			<>
				<StyledHeader>
					<Icon
						icon="hamburger"
						onClick={this.handleMenu}
					/>
					<Wrapper>
						<Icon
							small={false}
							icon="logo"
						/>
					</Wrapper>
					<Wrapper>
						<Button invertedPurple onClick={() => console.log('LOGIN')} spaced>
							LOGIN
						</Button>
						<Button purple onClick={() => console.log('SIGN UP')} spaced>
							SIGN UP
						</Button>
						<Icon icon="cart" />
					</Wrapper>
				</StyledHeader>
				{this.state.showMenu && (
					<SideMenu>
						<h1>HELLO WORLD</h1>
					</SideMenu>
				)}
			</>
		);
	}
}

export default Header;