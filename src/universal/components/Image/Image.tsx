import styled, { css } from '../../lib/styled';

interface Props {
	url: string;
	height?: string;
	width?: string;
	margin?: boolean
}

const StyledImage = styled.div`
	${(props: Props) => {
		const handleSize = (param): string => param || '100%';
		return css`
			overflow: hidden;
			height: ${handleSize(props.height)};
			width: ${handleSize(props.width)};
			background-image: url(${props.url});
			background-size: cover;
			background-position: center;
			margin-bottom: ${props.margin && '20px'};
		`;
	}};
`;

export default StyledImage;