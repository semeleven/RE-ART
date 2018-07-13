import * as React from 'react';
import styled, { css } from '../../lib/styled';

import {
	Account,
	Cart,
	Hamburger,
	Search,
	Logo,
	Logout,
	Loading,
	Notifications,
	Plus,
	Question
} from './icons';

const icons = {
	Account,
	Hamburger,
	Search,
	Loading,
	Logout,
	Notifications,
	Plus,
	Question,
	Logo, // Temporary
	Cart, // Temporary
};

export type ListOfIcons =
	'Account'
	| 'Hamburger'
	| 'Search'
	| 'Logo'
	| 'Logout'
	| 'Cart'
	| 'Loading'
	| 'Notifications'
	| 'Plus'
	| 'Question';

// TODO: add medium, large etc props
interface Props {
	small?: boolean;
	icon: ListOfIcons;
	onClick?: () => void;
	pointer?: boolean; // cursor: pointer
	absolute?: boolean; // position absolute for preloaders etc
}

const IconWrapper = styled.div`
	${(props: Props) => {
		const size = props.small ? '32px' : '64px';
		return css`
			position: ${props.absolute ? 'absolute' : 'relative'};
			left: ${props.absolute && '12px'};
			width: ${size};
			height: ${size};
			cursor: ${props.pointer ? 'pointer' : 'default'};
		`;
	}};
`;

const Icon: React.SFC<Props> = ({ icon, onClick, ...rest }) => {
	const SelectedIcon = icons[icon];

	return (
		<IconWrapper icon={icon} onClick={onClick} {...rest}>
			<SelectedIcon />
		</IconWrapper>
	);
};

Icon.defaultProps = {
	small: true,
	onClick: () => {},
	pointer: true,
};

export default Icon;
