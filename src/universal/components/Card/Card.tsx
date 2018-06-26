import styled from '../../lib/styled';
import { colors } from '../../lib/styled/theme';

const StyledCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	font-family: 'Lato', sans-serif;
	font-weight: 600;
	outline: none;
	font-size: 15px;
	line-height: 1;
	cursor: pointer;
	height: 100px;
	width: 255px;
	background-color: ${colors.white};
	color: ${colors.darkGray};
	padding: 40px 80px;
	border: 1px solid ${colors.darkGray};
	transition: 0.2s ease-in-out;
	user-select: none;
	:hover {
		background-color: ${colors.darkGray};
		color: ${colors.white};
	}
`;

export default StyledCard;
