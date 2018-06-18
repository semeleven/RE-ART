import { darken } from 'polished';
import styled, { css, colorsInterface } from '../../lib/styled';

interface Props {
	showMenu: boolean;
	theme?: colorsInterface;
}

const StyledSideMenu = styled.div`
	${(props: Props) =>
		css`
			position: fixed;
			visibility: ${props.showMenu ? 'visible' : 'hidden'};
			background-color: ${darken(0.05, props.theme.darkGray)};
			top: 82px;
			left: 0;
			height: 100%;
			width: 25vw;
			z-index: 777;
		`};
`;

export default StyledSideMenu;
