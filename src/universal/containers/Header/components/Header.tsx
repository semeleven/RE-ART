import React, { Fragment } from 'react';
import styled, { css } from '../../../lib/styled/';

import { Button, Icon, SideMenu, Link } from '../../../components';
import { colors, media } from '../../../lib/styled/theme';

interface Props {
	toggleModal: () => void;
	toggleMenu: () => void;
	showMenu: boolean;
}

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${colors.darkGray};
	padding-left: 24px;
	padding-right: 24px;
	height: 82px;
	margin-bottom: 50px;
	${media.mobile`
		padding-left: 12px;
		padding-right: 12px;
	`};
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

const HideOnMobile = styled.div`
	${media.mobile`
		display: none;
	`};
`;

const ShowOnMobileOnly = styled.div`
	display: none;
	${media.mobile`
		display: flex;
		color: white;
		padding-right: 20px;
	`};
`;

const Header: React.SFC<Props> = ({ showMenu, toggleModal, toggleMenu }) => (
	<Fragment>
		<StyledHeader>
			<FlexWrapper flex="start">
				<Icon icon="Hamburger" onClick={toggleMenu} />
			</FlexWrapper>
			<LogoWrapper>
				<Icon small={false} icon="Logo" />
			</LogoWrapper>
			<FlexWrapper flex="end">
				{/* render login link instead of button on mobile devices */}
				<ShowOnMobileOnly>
					<Link white onClick={() => toggleModal()} size="S">
						LOGIN
					</Link>
				</ShowOnMobileOnly>
				<HideOnMobile>
					<Button purple onClick={() => toggleModal()} spaced>
						LOGIN
					</Button>
				</HideOnMobile>
				<Icon icon="Search" />
			</FlexWrapper>
		</StyledHeader>
		<SideMenu showMenu={showMenu}>
			<h1>HELLO WORLD</h1>
		</SideMenu>
	</Fragment>
);

export default Header;
