import { darken } from 'polished';
import styled from '../../lib/styled';

const StyledSideMenu = styled.div`
	position: fixed;
	background-color: ${props => darken(0.05, props.theme.darkGray)};
	top: 82px;
	left: 0;
	height: 100%;
	width: 25vw;
	z-index: 777;
`;

export default StyledSideMenu;