import styled, { css } from '../../lib/styled';

interface Props {
	url: string;
	height?: string
	width?: string
}

const StyledImage = styled.div`
	${(props: Props) => {
		const handleSize = (param) : string => param ? param : '100%';
		return css`
				overflow: hidden;
				height: ${handleSize(props.height)};
				width: ${handleSize(props.width)};
				background-image: url(${props.url});
				background-size: cover;
				background-position: center;
		`;	
	}}
`;

export default StyledImage;
