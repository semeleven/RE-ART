import React from 'react';
import { darken } from 'polished';
import styled, { css, colorsInterface } from '../../../lib/styled/index';

interface Props {
	showMenu: boolean;
	theme?: colorsInterface;
}

// TODO: add media queries for width
const StyledSideMenu = styled.div`
	${(props: Props) =>
		css`
			position: absolute;
			visibility: ${props.showMenu ? 'visible' : 'hidden'};
			background-color: ${darken(0.05, props.theme.darkGray)};
			top: 82px;
			left: 0;		
			height: ${props.showMenu ? '320px' : '0px'}; 
			width: 100%;
			z-index: 777;
			transition: 0.3s ease-in-out all;
		`};
`;

const Wrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

const SideMenu: React.SFC<Props> = ({ children, showMenu }) => (
	<StyledSideMenu showMenu={showMenu}>
		<Wrapper>
			{children}
		</Wrapper>
	</StyledSideMenu>
);

export default SideMenu;
