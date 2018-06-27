import styled, { css } from '../../../lib/styled';

interface Props {
	url: string;
}

const StyledImage = styled.div`
	${(props: Props) =>
		css`
			overflow: hidden;
			width: 100%;
			height: 100%;
			background-image: url(${props.url});
			background-size: cover;
			background-position: center;
		`};
`;

export default StyledImage;
