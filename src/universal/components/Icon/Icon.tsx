import React from 'react';
import styled, { css } from '../../lib/styled';

import Hamburger from './icons/Hamburger';
import Search from './icons/Search';
import Logo from './icons/Logo';
import Cart from './icons/Cart';

const icons = {
	hamburger: Hamburger,
	search: Search,
	logo: Logo, // Temporary
	cart: Cart, // Temporary
};

// TODO: add medium, large etc props
interface Props {
	small?: boolean;
	icon?: 'hamburger' | 'search' | 'logo' | 'cart';
	onClick?: () => void;
}

const IconWrapper = styled.div`
	${(props: Props) => {
		const size = props.small ? '32px' : '64px';
		return css`
			width: ${size};
			height: ${size};
			cursor: pointer;
		`;
	}};
`;

const Icon: React.SFC<Props> = ({ icon, small, onClick }) => {
	const SelectedIcon = icons[icon];

	return (
		<IconWrapper small={small} onClick={onClick}>
			<SelectedIcon />
		</IconWrapper>
	);
};

Icon.defaultProps = {
	small: true,
	onClick: () => {},
};

export default Icon;
