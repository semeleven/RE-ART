import { darken } from 'polished';
import styled, { css, colorsInterface } from '../../lib/styled';

interface Props {
	showMenu: boolean;
	theme?: colorsInterface;
}

// TODO: add media queries for width
const StyledSideMenu = styled.div`
	${(props: Props) =>
		css`
			position: fixed;
			background-color: ${darken(0.05, props.theme.darkGray)};
			top: 82px;
			left: ${props.showMenu ? 0 : -365}			
			height: 100%;
			width: 365px;
			z-index: 777;
			transition: 0.3s ease-in-out;
		`};
`;

export default StyledSideMenu;
