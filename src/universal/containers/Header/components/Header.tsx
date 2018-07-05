import React, { Fragment } from 'react';
import styled, { css } from '../../../lib/styled/';

import { Button, Icon, SideMenu } from '../../../components/index';

interface Props {
	toggleModal: () => void;
	toggleMenu: () => void;
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

interface FlexWrapperProps {
	flex: 'start' | 'end';
}

const FlexWrapper = styled.div`
	${(props: FlexWrapperProps) =>
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

const Header: React.SFC<Props> = ({ showMenu, toggleModal, toggleMenu }) => (
	<Fragment>
		<StyledHeader>
			<FlexWrapper flex="start">
				<Icon icon="hamburger" onClick={toggleMenu} />
			</FlexWrapper>
			<LogoWrapper>
				<Icon small={false} icon="logo" />
			</LogoWrapper>
			<FlexWrapper flex="end">
				<Button purple onClick={() => {
					console.log('toggleModal!');
					return toggleModal();
				}} spaced>
					LOGIN
				</Button>
				<Icon icon="search" />
			</FlexWrapper>
		</StyledHeader>
		<SideMenu showMenu={showMenu}>
			<h1>HELLO WORLD</h1>
		</SideMenu>
	</Fragment>
);

export default Header;
