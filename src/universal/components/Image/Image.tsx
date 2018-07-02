import styled, { css } from '../../lib/styled';
import { media } from '../../lib/styled/theme';

interface Props {
	url: string;
	height?: string;
	width?: string;
	margin?: boolean;
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
			${media.tablet`
				height: ${props.height && '270px'}
			`};
			${media.mobile`
				height: ${props.height && '220px'}
			`};
			${media.small`
				height: ${props.height && '220px'}
			`};
		`;
	}};
`;

export default StyledImage;
