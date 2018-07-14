import * as React from 'react';
import styled, { css } from '../../../lib/styled/';

import { Button, Icon, TopMenu, Link } from '../../../components';
import { colors, media } from '../../../lib/styled/theme';

interface Props {
	toggleModal: () => void;
	toggleMenu: () => void;
	showMenu: boolean;
	token?: string; // user's token
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

const PersonalWrapper = styled.div`
	display: flex;
	margin-right: 60px;
	${media.tablet`
		margin-right: 30px;
	`};
`;

const IconWrapper = styled.div`
	margin-left: 30px;
`;

export const Authorization = ({ toggleModal }) => (
	<React.Fragment>
		<ShowOnMobileOnly>
			{/* render login link instead of button on mobile devices */}
			<Link white onClick={toggleModal} size="S">
					LOGIN
			</Link>
		</ShowOnMobileOnly>' '<HideOnMobile>
		<Button purple onClick={toggleModal} spaced>
					LOGIN
			</Button>
	    </HideOnMobile>
	</React.Fragment>
);

export const Personal = () => (
	<HideOnMobile>
		<PersonalWrapper>
			<IconWrapper>
				<Icon icon="Chat" />
			</IconWrapper>
			<IconWrapper>
				<Icon icon="Notifications" />
			</IconWrapper>
			<IconWrapper>
				<Icon icon="Account" />
			</IconWrapper>
		</PersonalWrapper>
	</HideOnMobile>
);

const Header: React.SFC<Props> = ({
	showMenu,
	toggleModal,
	toggleMenu,
	token,
}) => (
	<React.Fragment>
		<StyledHeader>
			<FlexWrapper flex="start">
				<Icon icon="Hamburger" onClick={toggleMenu} />
			</FlexWrapper>
			<LogoWrapper>
				<Icon small={false} icon="Logo" />
			</LogoWrapper>
			<FlexWrapper flex="end">
				{token ? <Personal /> : <Authorization toggleModal={toggleModal} />}
				<Icon icon="Cart" />
			</FlexWrapper>
	    </StyledHeader>
		<TopMenu showMenu={showMenu}>
			<h1>HELLO WORLD</h1>
	   </TopMenu>
	</React.Fragment>
);

export default Header;
