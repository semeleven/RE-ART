import React from 'react';
import styled, { css } from '../../lib/styled';

import Hamburger from './icons/Hamburger';
import Search from './icons/Search';
import Logo from './icons/Logo';
import Loading from './icons/Loading';
import Cart from './icons/Cart';

const icons = {
	hamburger: Hamburger,
	search: Search,
	loading: Loading,
	logo: Logo, // Temporary
	cart: Cart, // Temporary
};

// TODO: add medium, large etc props
interface Props {
	small?: boolean;
	icon: 'hamburger' | 'search' | 'logo' | 'cart' | 'loading';
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
