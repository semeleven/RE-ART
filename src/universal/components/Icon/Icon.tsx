import * as React from 'react';
import styled, { css } from '../../lib/styled';

import Account from './icons/Account';
import Cart from './icons/Cart';
import Hamburger from './icons/Hamburger';
import Search from './icons/Search';
import Logo from './icons/Logo';
import Logout from './icons/Logout';
import Loading from './icons/Loading';
import Notifications from './icons/Notifications';
import Plus from './icons/Plus';
import Question from './icons/Question';

const icons = {
	account: Account,
	hamburger: Hamburger,
	search: Search,
	loading: Loading,
	logout: Logout,
	notifications: Notifications,
	plus: Plus,
	question: Question,
	logo: Logo, // Temporary
	cart: Cart, // Temporary
};

// TODO: add medium, large etc props
interface Props {
	small?: boolean;
	icon:
		| 'account'
		| 'hamburger'
		| 'search'
		| 'logo'
		| 'logout'
		| 'cart'
		| 'loading'
		| 'notifications'
		| 'plus'
		| 'question';
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
