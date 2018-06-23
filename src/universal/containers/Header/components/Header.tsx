import React, { Component, Fragment } from 'react';
import styled, { css } from '../../../lib/styled/';

import { Button, Icon, SideMenu } from '../../../components/index';

interface Props {
	flex: 'start' | 'end';
}

interface State {
	showMenu: boolean;
}

const StyledHeader = styled.header`
	display: flex;
	color: ${props => props.theme.white};
	justify-content: space-between;
	align-items: center;
	background-color: ${props => props.theme.darkGray};
	padding-left: 24px;
	padding-right: 24px;
	height: 82px;
	margin-bottom: 50px;
`;

const FlexWrapper = styled.div`
	${(props: Props) =>
		css`
			display: flex;
			width: 100%;
			flex: 1;
			align-items: center;
			justify-content: ${props.flex === 'start' ? 'flex-start' : 'flex-end'};
		`};
`;

const LogoWrapper = styled.div`
	display: flex;
	width: 100%;
	flex: 2;
	align-items: center;
	justify-content: center;
`;

class Header extends Component<any, State> {
	state = {
		showMenu: false,
	};

	toggleMenu = () => this.setState(state => ({ showMenu: !state.showMenu }));

	render() {
		const { showMenu } = this.state;

		return (
			<Fragment>
				<StyledHeader>
					<FlexWrapper flex="start">
						<Icon icon="hamburger" onClick={this.toggleMenu} />
					</FlexWrapper>
					<LogoWrapper>
						<Icon small={false} icon="logo" />
					</LogoWrapper>
					<FlexWrapper flex="end">
						<Button invertedPurple onClick={() => console.log('LOGIN')} spaced>
							LOGIN
						</Button>
						<Button purple onClick={() => console.log('SIGN UP')} spaced>
							SIGN UP
						</Button>
						<Icon icon="search" />
					</FlexWrapper>
				</StyledHeader>
				<SideMenu showMenu={showMenu}>
					<h1>HELLO WORLD</h1>
				</SideMenu>
			</Fragment>
		);
	}
}

export default Header;
